import cloudinaryImageUpload from '../config/imageUpload/cloudinary.js';
import asyncHandler from 'express-async-handler'; 
import slug from 'slug';
const slugIt = slug; 
import Product from '../models/Product.js'; 
import Brand from '../models/Brand.js'; 


const getBrands = asyncHandler(async (req, res) => { 
    const current_page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10; 

    const skip = (current_page - 1) * limit; 

	const brands = await Brand.find()
                                .sort('-created_at')
                                .skip(skip)
                                .limit(limit)
                                .lean(); 
    if (!brands?.length) return res.status(404).json({ message: "No brands found!" }); 

    const total = await Brand.countDocuments(); 

    let brandsList = []; 

    const updatePromises = brands?.map(async brand => { 
        let foundProducts = await Product.find({ category: brand?._id }).exec(); 
        brand['products'] = foundProducts; 

        brandsList.push(brand);
    }); 

    await Promise.all(updatePromises); 

    res.json({ 
                meta: {
                    current_page, 
                    limit, 
                    total_pages: Math.ceil(total / limit), 
                    total_results: total
                }, 
                data: brandsList 
            });
});

const createBrand = asyncHandler(async (req, res) => {
    const { title, 
            description, 
            // logo, 
            web_address, 
            facebook, 
            instagram, 
            twitter_x, 
            other_social, 
            other_social_handle } = req?.body; 

    const duplicateBrand = await Brand.findOne({ $or: [{ title: title }, { slug: slugIt(title) }] }).lean(); 

    if (duplicateBrand) return res.status(409).json({ message: `Brand ${duplicateBrand.title} already exists` }); 

    const { logo } = req?.files; 

    const brandImageUpload = await cloudinaryImageUpload(logo.tempFilePath, "tasha_best_decor_brand_images"); 
    if (!brandImageUpload) return res.status(400).json({ message: "Image upload failed" }); 

    const brand = new Brand({
        user: req?.user_id, 
        slug: slugIt(title),
        title, 
        description, 
        logo_path: { 
            public_id: brandImageUpload.public_id,
            url: brandImageUpload.secure_url
        }, 
        web_address, 
        facebook, 
        instagram, 
        twitter_x, 
        other_social, 
        other_social_handle
    }); 

    brand.save()
        .then(() => {
            res.status(201).json({ success: `Brand ${brand.title} added`, data: brand });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getBrand = asyncHandler(async (req, res) => { 
    const page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10; 

    const skip = (page - 1) * limit; 

    const { id } = req?.params; 

	const brand = await Brand.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!brand) return res.status(404).json({ message: `No brand matches brand ${id}!` }); 

    const products = await Product.find({ brand: brand?._id })
                                            .sort('-created_at')
                                            .skip(skip)
                                            .limit(limit)
                                            .lean(); 

    const total = await Product.countDocuments();

    brand['products'] = products;
    brand['products']['page'] = page;
    brand['products']['limit'] = limit;
    brand['products']['totalPages'] = Math.ceil(total / limit);
    brand['products']['totalResults'] = total;

	res.status(200).json({ data: brand });
}); 

const updateBrand = asyncHandler(async (req, res) => {
    const { title, 
            description, 
            logo, 
            web_address, 
            facebook, 
            instagram, 
            twitter_x, 
            other_social, 
            other_social_handle } = req?.body; 

    const { id } = req?.params; 

    const brand = await Brand.findOne({ _id: id }).exec();
    if (!brand) return res.status(404).json({ message: "Brand not found!" }); 

    if (title) brand.title = title; 
    if (description) brand.description = description; 
    if (logo) brand.logo = logo; 
    if (web_address) brand.web_address = web_address; 
    if (facebook) brand.facebook = title; 
    if (instagram) brand.instagram = instagram; 
    if (twitter_x) brand.twitter_x = twitter_x; 
    if (other_social) brand.other_social = other_social; 
    if (other_social_handle) brand.other_social_handle = other_social_handle; 

    brand.save()
        .then(() => { 
			res.status(200).json({ success: `Brand record updated.`, data: brand });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const brand = await Brand.findOne({ _id: id }).exec();

    if (!brand) return res.status(404).json({ message: `No brand matches the brand ${id}!` }); 

    if (brand.deleted_at == '') {
        brand.deleted_at = new Date().toISOString();
        brand.deleted_by = req?.user_id;
    }

    brand.save()
        .then(() => { 
			res.status(200).json({ success: `Brand record deleted.`, data: brand });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreBrand = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const brand = await Brand.findOne({ _id: id }).exec();

    if (!brand) return res.status(404).json({ message: `No brand matches the brand ${id}!` }); 

    if (brand.deleted_at != '') {
        brand.deleted_at = '';
        brand.deleted_by = '';
    };

    brand.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted brand record restored.`, data: brand });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyBrand = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const brand = await Brand.findOne({ _id: id }).exec();

	if (!brand) return res.status(404).json({ message: `No brand matches the brand ${id}!` }); 

	await brand.deleteOne(); 

	res.status(200).json({ success: `Brand ${brand?._id} has been permanently deleted.`, data: `${brand}` });
}); 


export { getBrands, 
		createBrand, 
		getBrand, 
		updateBrand, 
		deleteBrand, 
        restoreBrand, 
        destroyBrand }; 