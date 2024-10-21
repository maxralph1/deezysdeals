import cloudinaryImageUpload from '../config/imageUpload/cloudinary.js';
import asyncHandler from 'express-async-handler'; 
import slug from 'slug';
const slugIt = slug; 
import Product from '../models/Product.js'; 
import CategoryProduct from '../models/CategoryProduct.js';
import ProductFeature from '../models/ProductFeature.js';
import ProductImage from '../models/ProductImage.js';
import mongoose from 'mongoose';


const getProducts = asyncHandler(async (req, res) => { 
    const current_page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10; 

    const skip = (current_page - 1) * limit; 

	const products = await Product.find({ deleted_at: null })
                                .sort('-created_at')
                                .skip(skip)
                                .limit(limit)
                                .lean(); 
    if (!products?.length) return res.status(404).json({ message: "No products found!" }); 

    const total = await Product.countDocuments(); 

    let productsList = []; 

    const updateProductPromises = products?.map(async productItem => { 
        let foundProductImages = await ProductImage.find({ product: productItem?._id }).exec(); 
        productItem['product_images'] = foundProductImages; 

        let foundProductCategories = await CategoryProduct.find({ product: productItem?._id })
                                                        .select('-product -deleted_at')
                                                        .populate({
                                                            path: 'category', 
                                                            select: '_id title description'
                                                        })
                                                        .exec(); 
        productItem['product_categories'] = foundProductCategories; 


        productsList.push(productItem); 
    }); 

    await Promise.all(updateProductPromises); 

	// res.json({ data: products }); 

    res.json({ 
                meta: {
                    current_page, 
                    limit, 
                    total_pages: Math.ceil(total / limit), 
                    total_results: total
                }, 
                data: productsList 
            });
});

const createProduct = asyncHandler(async (req, res) => {
    const { brand, 
            discount, 
            categories, 
            title, 
            description, 
            features, 
            retail_price, 
            initial_retail_price, 
            currency } = req?.body; 

    const { image_1, 
            image_2,    
            image_3, 
            image_4, 
            image_5 } = req?.files; 

    console.log(image_1);

    const session = await mongoose.startSession(); 
    session.startTransaction(); 

    try {
        
        /** Product Section */ 

        const newProduct = await Product.create({
            user: req?.user_id, 
            brand, 
            discount, 
            title, 
            slug: slugIt(title + '-' + new Date().toISOString() ),
            description, 
            features, 
            retail_price, 
            initial_retail_price, 
            currency
        }); 

        /** End Product Section */


        /** Categories Section */

        let categoriesArray = categories.split(","); 
        console.log(categoriesArray); 

        let productCategories = []; 
        categoriesArray?.map(async categoryItem => {
            let newCategoryProduct = await CategoryProduct.create({
                category: categoryItem, 
                product: newProduct._id
            }); 

            productCategories.push(newCategoryProduct);
        }); 

        // await Promise.all(createCategoriesProducts); 

        /** End Categories Section */



        /************ Images Section */

        let productImages = []; 

        /** Product Image 1 */
        if (image_1) {
            const productImageUpload = await cloudinaryImageUpload(image_1.tempFilePath, "tasha_best_decor_product_images"); 
            if (!productImageUpload) return res.status(400).json({ message: "Image upload failed" }); 

            await ProductImage.create({ 
                added_by: req?.user_id, 
                product: newProduct._id, 
                image_path: { 
                    public_id: productImageUpload.public_id,
                    url: productImageUpload.secure_url
                }, 
            }); 

            // productImages.push(productImageUpload.secure_url); 
        }
        /** End Product Image 1 */ 

        /** Product Image 2 */
        if (image_2) {
            const productImageUpload2 = await cloudinaryImageUpload(image_2.tempFilePath, "tasha_best_decor_product_images"); 
            if (!productImageUpload2) return res.status(400).json({ message: "Image upload failed" }); 

            await ProductImage.create({ 
                added_by: req?.user_id, 
                product: newProduct._id, 
                image_path: { 
                    public_id: productImageUpload2.public_id,
                    url: productImageUpload2.secure_url
                }, 
            }); 

            // productImages.push(productImageUpload2.secure_url); 
        }
        /** End Product Image 2 */ 

        /** Product Image 3 */
        if (image_3) {
            const productImageUpload3 = await cloudinaryImageUpload(image_3.tempFilePath, "tasha_best_decor_product_images"); 
            if (!productImageUpload3) return res.status(400).json({ message: "Image upload failed" }); 

            await ProductImage.create({ 
                added_by: req?.user_id, 
                product: newProduct._id, 
                image_path: { 
                    public_id: productImageUpload3.public_id,
                    url: productImageUpload3.secure_url
                }, 
            }); 

            // productImages.push(productImageUpload3.secure_url); 
        }
        /** End Product Image 3 */ 

        /** Product Image 4 */
        if (image_4) {
            const productImageUpload4 = await cloudinaryImageUpload(image_4.tempFilePath, "tasha_best_decor_product_images"); 
            if (!productImageUpload4) return res.status(400).json({ message: "Image upload failed" }); 

            await ProductImage.create({ 
                added_by: req?.user_id, 
                product: newProduct._id, 
                image_path: { 
                    public_id: productImageUpload4.public_id,
                    url: productImageUpload4.secure_url
                }, 
            }); 

            // productImages.push(productImageUpload4.secure_url); 
        }
        /** End Product Image 4 */ 

        /** Product Image 5 */
        if (image_5) {
            const productImageUpload5 = await cloudinaryImageUpload(image_5.tempFilePath, "tasha_best_decor_product_images"); 
            if (!productImageUpload5) return res.status(500).json({ message: "Image upload failed" }); 

            await ProductImage.create({ 
                added_by: req?.user_id, 
                product: newProduct._id, 
                image_path: { 
                    public_id: productImageUpload5.public_id,
                    url: productImageUpload5.secure_url
                }, 
            }); 

            // productImages.push(productImageUpload5.secure_url); 
        }
        /** End Product Image 5 */  

        /************ End Images Section */



        newProduct['categories'] = productCategories; 
        // newProduct['images'] = productImages; 

        await session.commitTransaction(); 

        res.status(201).json({ success: `Product ${newProduct._id} added`, data: newProduct });


    } catch(error) { 

        await session.abortTransaction(); 
        // await transaction.rollback();
        
        res.status(500).json({ message: "An error occured! Product not saved.", details: `${error}` }); 

    } finally {

        session.endSession();

    }
}); 

const getProduct = asyncHandler(async (req, res) => { 
    const { id } = req?.params;
	const product = await Product.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!product) return res.status(404).json({ message: `No product matches product ${id}!` });
	res.status(200).json({ data: product });
}); 

const updateProduct = asyncHandler(async (req, res) => {
    const { brand, 
            discount, 
            category, 
            sub_category, 
            title, 
            description, 
            retail_price, 
            initial_discount_value } = req?.body; 

    const { id } = req?.params; 

    const product = await Product.findOne({ _id: id }).exec();
    if (!product) return res.status(404).json({ message: "Product not found!" }); 

    if (brand) product.brand = brand; 
    if (discount) product.discount = discount; 
    if (category) product.category = category; 
    if (sub_category) product.sub_category = sub_category; 
    if (title) product.title = title; 
    if (description) product.description = description; 
    if (retail_price) product.retail_price = retail_price; 
    if (initial_discount_value) product.initial_discount_value = initial_discount_value; 

    product.save()
        .then(() => { 
			res.status(200).json({ success: `Product record updated.`, data: product });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const product = await Product.findOne({ _id: id }).exec();

    if (!product) return res.status(404).json({ message: `No product matches the product ${id}!` }); 

    if (product.deleted_at == '') {
        product.deleted_at = new Date().toISOString();
        product.deleted_by = req?.user_id;
    }

    product.save()
        .then(() => { 
			res.status(200).json({ success: `Product record deleted.`, data: product });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreProduct = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const product = await Product.findOne({ _id: id }).exec();

    if (!product) return res.status(404).json({ message: `No product matches the product ${id}!` }); 

    if (product.deleted_at != '') {
        product.deleted_at = '';
        product.deleted_by = '';
    };

    product.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted product record restored.`, data: product });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyProduct = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const product = await Product.findOne({ _id: id }).exec();

	if (!product) return res.status(404).json({ message: `No product matches the product ${id}!` }); 

	await product.deleteOne(); 

	res.status(200).json({ success: `Product ${product?._id} has been permanently deleted.`, data: `${product}` });
}); 


export { getProducts, 
		createProduct, 
		getProduct, 
		updateProduct, 
		deleteProduct, 
        restoreProduct, 
        destroyProduct }; 