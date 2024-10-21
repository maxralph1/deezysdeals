import asyncHandler from 'express-async-handler'; 
import Favorite from '../models/Favorite.js'; 
import Product from '../models/Product.js';


const getFavorites = asyncHandler(async (req, res) => {
	const favorites = await Favorite.find()
                                    .sort('-created_at')
                                    .populate({
                                        path: 'product'
                                    })
                                    .lean(); 
    if (!favorites?.length) return res.status(404).json({ message: "No favorites found!" });

	res.json({ data: favorites });
});

const createFavorite = asyncHandler(async (req, res) => {
    const { product } = req?.params; 

    const productFound = await Product.findOne({ _id: product }).lean();

    if(!productFound?.length) return res.status(404).json({ message: "No product matches the product key provided!" });

    const favorite = new Favorite({
        added_by: req?.user_id, 
        product
    }); 

    favorite.save()
        .then(() => {
            res.status(201).json({ success: `Favorite ${favorite._id} added`, data: favorite });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getFavorite = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
	const favorite = await Favorite.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
        .populate({
            path: 'product'
        })
		.lean();

	if (!favorite) return res.status(404).json({ message: `No favorite matches favorite ${req?.params?.id}!` });
	res.status(200).json({ data: favorite });
}); 

const deleteFavorite = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const favorite = await Favorite.findOne({ _id: id }).exec();

	if (!favorite) return res.status(404).json({ message: `No favorite matches the favorite ${id}!` }); 

	await favorite.deleteOne(); 

	res.status(200).json({ success: `Favorite ${favorite?.code} has been permanently deleted.`, data: `${favorite}` });
}); 


export { getFavorites, 
		createFavorite, 
		getFavorite, 
		deleteFavorite }; 