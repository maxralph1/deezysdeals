import asyncHandler from 'express-async-handler'; 
import ProductVariationValue from '../models/ProductVariationValue.js'; 


const getProductVariationValues = asyncHandler(async (req, res) => {
	const productVariationValues = await ProductVariationValue.find().sort('-created_at').lean(); 
    if (!productVariationValues?.length) return res.status(404).json({ message: "No product variationValues found!" });

	res.json({ data: productVariationValues });
});

const createProductVariationValue = asyncHandler(async (req, res) => {
    const { product, 
            product_unit, 
            product_variation, 
            value } = req?.body; 

    const productVariationValue = new ProductVariationValue({
        user: req?.user_id, 
        product, 
        product_unit, 
        product_variation, 
        value 
    }); 

    productVariationValue.save()
        .then(() => {
            res.status(201).json({ success: `Product variation value ${productVariationValue._id} added`, data: productVariationValue });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getProductVariationValue = asyncHandler(async (req, res) => { 
    const { id } = req?.params;
	const productVariationValue = await ProductVariationValue.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!productVariationValue) return res.status(404).json({ message: `No product variation value matches product variation value ${id}!` });
	res.status(200).json({ data: productVariationValue });
}); 

const updateProductVariationValue = asyncHandler(async (req, res) => {
    const { product, 
            product_unit, 
            product_variation, 
            value } = req?.body; 

    const { id } = req?.params; 

    const productVariationValue = await ProductVariationValue.findOne({ _id: id }).exec();
    if (!productVariationValue) return res.status(404).json({ message: "Product variation value not found!" }); 

    if (product) productVariationValue.product = product; 
    if (product_unit) productVariationValue.product_unit = product_unit;  
    if (product_variation) productVariationValue.product_variation = product_variation;  
    if (value) productVariationValue.value = value;  

    productVariationValue.save()
        .then(() => { 
			res.status(200).json({ success: `Product variation value record updated.`, data: productVariationValue });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteProductVariationValue = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const productVariationValue = await ProductVariationValue.findOne({ _id: id }).exec();

    if (!productVariationValue) return res.status(404).json({ message: `No product variation value matches the product variation value ${id}!` }); 

    if (productVariationValue.deleted_at == '') {
        productVariationValue.deleted_at = new Date().toISOString();
        productVariationValue.deleted_by = req?.user_id;
    }

    productVariationValue.save()
        .then(() => { 
			res.status(200).json({ success: `Product variation value record deleted.`, data: productVariationValue });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreProductVariationValue = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const productVariationValue = await ProductVariationValue.findOne({ _id: id }).exec();

    if (!productVariationValue) return res.status(404).json({ message: `No product variation value matches the product variation value ${id}!` }); 

    if (productVariationValue.deleted_at != '') {
        productVariationValue.deleted_at = '';
        productVariationValue.deleted_by = '';
    };

    productVariationValue.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted product variation value record restored.`, data: productVariationValue });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyProductVariationValue = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const productVariationValue = await ProductVariationValue.findOne({ _id: id }).exec();

	if (!productVariationValue) return res.status(404).json({ message: `No product variation value matches the product variation value ${id}!` }); 

	await productVariationValue.deleteOne(); 

	res.status(200).json({ success: `Product variation value ${productVariationValue?._id} has been permanently deleted.`, data: `${productVariationValue}` });
}); 


export { getProductVariationValues, 
		createProductVariationValue, 
		getProductVariationValue, 
		updateProductVariationValue, 
		deleteProductVariationValue, 
        restoreProductVariationValue, 
        destroyProductVariationValue }; 