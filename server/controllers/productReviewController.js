import asyncHandler from 'express-async-handler'; 
import ProductReview from '../models/ProductReview.js'; 


const getProductReviews = asyncHandler(async (req, res) => {
	const productReviews = await ProductReview.find().sort('-created_at').lean(); 
    if (!productReviews?.length) return res.status(404).json({ message: "No product reviews found!" });

	res.json({ data: productReviews });
});

const createProductReview = asyncHandler(async (req, res) => {
    const { product, 
            product_unit, 
            title, 
            content, 
            rating } = req?.body; 

    const productReview = new ProductReview({
        user: req?.user_id, 
        product, 
        product_unit, 
        title, 
        content, 
        rating 
    }); 

    productReview.save()
        .then(() => {
            res.status(201).json({ success: `ProductReview ${productReview._id} added`, data: productReview });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getProductReview = asyncHandler(async (req, res) => { 
    const { id } = req?.params;
	const productReview = await ProductReview.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!productReview) return res.status(404).json({ message: `No productReview matches productReview ${id}!` });
	res.status(200).json({ data: productReview });
}); 

const updateProductReview = asyncHandler(async (req, res) => {
    const { product, 
            product_unit, 
            title, 
            content, 
            rating } = req?.body; 

    const { id } = req?.params; 

    const productReview = await ProductReview.findOne({ _id: id }).exec();
    if (!productReview) return res.status(404).json({ message: "Product review not found!" }); 

    if (product) productReview.product = product; 
    if (product_unit) productReview.product_unit = product_unit; 
    if (title) productReview.title = title;  
    if (content) productReview.content = content;  
    if (rating) productReview.rating = rating;  

    productReview.save()
        .then(() => { 
			res.status(200).json({ success: `Product review record updated.`, data: productReview });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteProductReview = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const productReview = await ProductReview.findOne({ _id: id }).exec();

    if (!productReview) return res.status(404).json({ message: `No product review matches the product review ${id}!` }); 

    if (productReview.deleted_at == '') {
        productReview.deleted_at = new Date().toISOString();
        productReview.deleted_by = req?.user_id;
    }

    productReview.save()
        .then(() => { 
			res.status(200).json({ success: `Product review record deleted.`, data: productReview });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreProductReview = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const productReview = await ProductReview.findOne({ _id: id }).exec();

    if (!productReview) return res.status(404).json({ message: `No product review matches the product review ${id}!` }); 

    if (productReview.deleted_at != '') {
        productReview.deleted_at = '';
        productReview.deleted_by = '';
    };

    productReview.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted product review record restored.`, data: productReview });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyProductReview = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const productReview = await ProductReview.findOne({ _id: id }).exec();

	if (!productReview) return res.status(404).json({ message: `No product review matches the product review ${id}!` }); 

	await productReview.deleteOne(); 

	res.status(200).json({ success: `Product review ${productReview?._id} has been permanently deleted.`, data: `${productReview}` });
}); 


export { getProductReviews, 
		createProductReview, 
		getProductReview, 
		updateProductReview, 
		deleteProductReview, 
        restoreProductReview, 
        destroyProductReview }; 