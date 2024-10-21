import asyncHandler from 'express-async-handler'; 
import ProductVariation from '../models/ProductVariation.js'; 


const getProductVariations = asyncHandler(async (req, res) => {
	const productVariations = await ProductVariation.find().sort('-created_at').lean(); 
    if (!productVariations?.length) return res.status(404).json({ message: "No product variations found!" });

	res.json({ data: productVariations });
});

const createProductVariation = asyncHandler(async (req, res) => {
    const { product, 
            title, 
            description } = req?.body; 

    const productVariation = new ProductVariation({
        user: req?.user_id, 
        product, 
        title, 
        description 
    }); 

    productVariation.save()
        .then(() => {
            res.status(201).json({ success: `ProductVariation ${productVariation._id} added`, data: productVariation });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getProductVariation = asyncHandler(async (req, res) => { 
    const { id } = req?.params;
	const productVariation = await ProductVariation.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!productVariation) return res.status(404).json({ message: `No productVariation matches productVariation ${id}!` });
	res.status(200).json({ data: productVariation });
}); 

const updateProductVariation = asyncHandler(async (req, res) => {
    const { product, 
            title, 
            description } = req?.body; 

    const { id } = req?.params; 

    const productVariation = await ProductVariation.findOne({ _id: id }).exec();
    if (!productVariation) return res.status(404).json({ message: "Product variation not found!" }); 

    if (product) productVariation.product = product; 
    if (title) productVariation.title = title;  
    if (description) productVariation.description = description;  

    productVariation.save()
        .then(() => { 
			res.status(200).json({ success: `Product variation record updated.`, data: productVariation });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteProductVariation = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const productVariation = await ProductVariation.findOne({ _id: id }).exec();

    if (!productVariation) return res.status(404).json({ message: `No product variation matches the product variation ${id}!` }); 

    if (productVariation.deleted_at == '') {
        productVariation.deleted_at = new Date().toISOString();
        productVariation.deleted_by = req?.user_id;
    }

    productVariation.save()
        .then(() => { 
			res.status(200).json({ success: `Product variation record deleted.`, data: productVariation });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreProductVariation = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const productVariation = await ProductVariation.findOne({ _id: id }).exec();

    if (!productVariation) return res.status(404).json({ message: `No product variation matches the product variation ${id}!` }); 

    if (productVariation.deleted_at != '') {
        productVariation.deleted_at = '';
        productVariation.deleted_by = '';
    };

    productVariation.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted product variation record restored.`, data: productVariation });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyProductVariation = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const productVariation = await ProductVariation.findOne({ _id: id }).exec();

	if (!productVariation) return res.status(404).json({ message: `No product variation matches the product variation ${id}!` }); 

	await productVariation.deleteOne(); 

	res.status(200).json({ success: `Product variation ${productVariation?._id} has been permanently deleted.`, data: `${productVariation}` });
}); 


export { getProductVariations, 
		createProductVariation, 
		getProductVariation, 
		updateProductVariation, 
		deleteProductVariation, 
        restoreProductVariation, 
        destroyProductVariation }; 