import asyncHandler from 'express-async-handler'; 
import Discount from '../models/Discount.js'; 


const getDiscounts = asyncHandler(async (req, res) => {
	const discounts = await Discount.find().sort('-created_at').lean(); 
    if (!discounts?.length) return res.status(404).json({ message: "No discounts found!" });

	res.json({ data: discounts });
});

const createDiscount = asyncHandler(async (req, res) => {
    const { title, 
            description, 
            code, 
            value, 
            value_unit, 
            usable_once } = req?.body; 

    const discount = new Discount({
        added_by: req?.user_id, 
        title, 
        description, 
        code, 
        value, 
        value_unit, 
        usable_once 
    }); 

    discount.save()
        .then(() => {
            res.status(201).json({ success: `Discount ${discount._id} added`, data: discount });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getDiscount = asyncHandler(async (req, res) => { 
    const { id } = req?.params;
	const discount = await Discount.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!discount) return res.status(404).json({ message: `No discount matches discount ${req?.params?.id}!` });
	res.status(200).json({ data: discount });
}); 

const updateDiscount = asyncHandler(async (req, res) => {
    const { title, 
            description, 
            code, 
            value, 
            value_unit, 
            usable_once } = req?.body; 

    const { id } = req?.params; 

    const discount = await Discount.findOne({ _id: id }).exec();
    if (!discount) return res.status(404).json({ message: "Discount not found!" }); 

    if (title) discount.title = title; 
    if (description) discount.description = description; 
    if (code) discount.code = code; 
    if (value) discount.value = value; 
    if (value_unit) discount.value_unit = title; 
    if (usable_once) discount.usable_once = usable_once; 

    discount.save()
        .then(() => { 
			res.status(200).json({ success: `Discount record updated.`, data: discount });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteDiscount = asyncHandler(async (req, res) => { 
    const { id } = req?.params; 

    const discount = await Discount.findOne({ _id: id }).exec();

    if (!discount) return res.status(404).json({ message: `No discount matches the discount ${id}!` }); 

    if (discount.deleted_at == '') {
        discount.deleted_at = new Date().toISOString();
        discount.deleted_by = req?.user_id;
    }

    discount.save()
        .then(() => { 
			res.status(200).json({ success: `Discount record deleted.`, data: discount });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreDiscount = asyncHandler(async (req, res) => { 
    const { id } = req?.params; 

    const discount = await Discount.findOne({ _id: id }).exec();

    if (!discount) return res.status(404).json({ message: `No discount matches the discount ${id}!` }); 

    if (discount.deleted_at != '') {
        discount.deleted_at = '';
        discount.deleted_by = '';
    }

    discount.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted discount record restored.`, data: discount });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyDiscount = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const discount = await Discount.findOne({ _id: id }).exec();

	if (!discount) return res.status(404).json({ message: `No discount matches the discount ${id}!` }); 

	await discount.deleteOne(); 

	res.status(200).json({ success: `Discount ${discount?.code} has been permanently deleted.`, data: `${discount}` });
}); 


export { getDiscounts, 
		createDiscount, 
		getDiscount, 
		updateDiscount, 
		deleteDiscount, 
        restoreDiscount, 
        destroyDiscount }; 