import asyncHandler from 'express-async-handler'; 
import slug from 'slug';
const slugIt = slug; 
import Category from '../models/Category.js'; 


const getCategories = asyncHandler(async (req, res) => { 
    const current_page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10; 

    const skip = (current_page - 1) * limit; 

	const categories = await Category.find()
                                    .sort('-created_at')
                                    .skip(skip)
                                    .limit(limit)
                                    .lean(); 
    if (!categories?.length) return res.status(404).json({ message: "No categories found!" }); 

    const total = await Category.countDocuments();

    let categoriesList = []; 

    const updatePromises = categories?.map(async categoryItem => { 
        let foundSubCategories = await SubCategory.find({ category: categoryItem?._id }).exec(); 
        categoryItem['sub_categories'] = foundSubCategories; 

        categoriesList.push(categoryItem);
    }); 

    await Promise.all(updatePromises); 

	res.json({ 
                meta: {
                    current_page, 
                    limit, 
                    total_pages: Math.ceil(total / limit), 
                    total_results: total
                }, 
                data: categoriesList 
            });
});

const createCategory = asyncHandler(async (req, res) => {
    const { title, 
            description } = req?.body; 

    const category = new Category({
        added_by: req?.user_id, 
        slug: slugIt(title),
        title, 
        description
    }); 

    category.save()
        .then(() => {
            res.status(201).json({ success: `Category ${category._id} added`, data: category });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getCategory = asyncHandler(async (req, res) => { 
    const { id } = req?.params;

	const category = await Category.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean(); 

    if (!category) return res.status(404).json({ message: `No category matches category ${req?.params?.id}!` }); 

    const subCategories = await SubCategory.find({ category: category?._id })
                                            .sort('-created_at')
                                            .lean(); 

    category['sub_categories'] = subCategories;

	res.status(200).json({ data: category }); 
}); 

const updateCategory = asyncHandler(async (req, res) => {
    const { title, 
            description } = req?.body; 

    const { id } = req?.params; 

    const category = await Category.findOne({ _id: id }).exec();
    if (!category) return res.status(404).json({ message: "Category not found!" }); 

    if (title) category.title = title; 
    if (description) category.description = description; 

    category.save()
        .then(() => { 
			res.status(200).json({ success: `Category record updated.`, data: category });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req?.params; 

    const category = await Category.findOne({ _id: id }).exec();
    if (!category) return res.status(404).json({ message: `No category matches the category ${id}!` });  

    if (category.deleted_at == '') {
        category.deleted_at = new Date().toISOString();
        category.deleted_by = req?.user_id;
    }

    category.save()
        .then(() => { 
			res.status(200).json({ success: `Category record updated.`, data: category });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreCategory = asyncHandler(async (req, res) => {
    const { id } = req?.params; 

    const category = await Category.findOne({ _id: id }).exec();
    if (!category) return res.status(404).json({ message: `No category matches the category ${id}!` });  

    if (category.deleted_at != '') {
        category.deleted_at = '';
        category.deleted_by = '';
    }; 

    category.save()
        .then(() => { 
			res.status(200).json({ success: `Category record updated.`, data: category });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyCategory = asyncHandler(async (req, res) => {
    const { id } = req?.params;

	const category = await Category.findOne({ _id: id }).exec();

	if (!category) return res.status(404).json({ message: `No category matches the category ${id}!` }); 

	await category.deleteOne(); 

	res.status(200).json({ success: `Category ${category?._id} has been permanently deleted.`, data: `${category}` });
}); 


export { getCategories, 
		createCategory, 
		getCategory, 
		updateCategory, 
		deleteCategory, 
        restoreCategory, 
        destroyCategory }; 