import asyncHandler from 'express-async-handler'; 
import ProductImage from '../models/ProductImage.js'; 


const getProductImages = asyncHandler(async (req, res) => {
	const productImages = await ProductImage.find().sort('-created_at').lean(); 
    if (!productImages?.length) return res.status(404).json({ message: "No product images found!" });

	res.json({ data: productImages });
});

const createProductImage = asyncHandler(async (req, res) => {
    const { product, 
            description, 
            is_product_default } = req?.body; 

    const productImage = new ProductImage({
        added_by: req?.user_id, 
        product, 
        description, 
        is_product_default 
    }); 

    if (is_product_default == 'true') { 
        await ProductImage.updateMany({ is_product_default: true }, { is_product_default: false });
    }; 

    productImage.save()
        .then(() => {
            res.status(201).json({ success: `Product image ${productImage._id} added`, data: productImage });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getProductImage = asyncHandler(async (req, res) => { 
    const { id } = req?.params;
	const productImage = await ProductImage.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!productImage) return res.status(404).json({ message: `No product image matches product image ${id}!` });
	res.status(200).json({ data: productImage });
}); 

const updateProductImage = asyncHandler(async (req, res) => {
    const { added_by, 
            product,  
            description, 
            is_product_default } = req?.body; 

    const { id } = req?.params; 

    const productImage = await ProductImage.findOne({ _id: id }).exec();
    if (!productImage) return res.status(404).json({ message: "Product Image not found!" }); 

    if (added_by) productImage.added_by = added_by; 
    if (product) productImage.product = product; 
    if (description) productImage.description = description; 
    if (is_product_default) productImage.is_product_default = is_product_default; 

    if (is_product_default == 'true') { 
        await ProductImage.updateMany({ is_product_default: true }, { is_product_default: false });
    }; 

    productImage.save()
        .then(() => { 
			res.status(200).json({ success: `Product unitImage record updated.`, data: productImage });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteProductImage = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const productImage = await ProductImage.findOne({ _id: id }).exec();

    if (!productImage) return res.status(404).json({ message: `No product image matches the product image ${id}!` }); 

    if (productImage.deleted_at == '') {
        productImage.deleted_at = new Date().toISOString();
        productImage.deleted_by = req?.user_id;
    }

    productImage.save()
        .then(() => { 
			res.status(200).json({ success: `Product image record deleted.`, data: productImage });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreProductImage = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const productImage = await ProductImage.findOne({ _id: id }).exec();

    if (!productImage) return res.status(404).json({ message: `No product image matches the product image ${id}!` }); 

    if (productImage.deleted_at != '') {
        productImage.deleted_at = '';
        productImage.deleted_by = '';
    };

    productImage.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted product image record restored.`, data: productImage });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyProductImage = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const productImage = await ProductImage.findOne({ _id: id }).exec();

	if (!productImage) return res.status(404).json({ message: `No product image matches the product image ${id}!` }); 

	await productImage.deleteOne(); 

	res.status(200).json({ success: `Product image ${productImage?._id} has been permanently deleted.`, data: `${productImage}` });
}); 


export { getProductImages, 
		createProductImage, 
		getProductImage, 
		updateProductImage, 
		deleteProductImage, 
        restoreProductImage, 
        destroyProductImage }; 