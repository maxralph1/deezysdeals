import asyncHandler from "express-async-handler"; 
import Address from '../models/Address.js'; 


const getAddresses = asyncHandler(async (req, res) => {
	const addresses = await Address.find({ user: req?.user_id })
									.sort('-created_at')
									.lean(); 
    if (!addresses?.length) return res.status(404).json({ message: "No addresses found!" });

	res.json({ data: addresses });
}); 

const createAddress = asyncHandler(async (req, res) => {
	const { full_name, 
			phone, 
			address_line_1, 
			address_line_2, 
			post_code, 
			town_city, 
			state_region, 
			country, 
			delivery_instructions } = req?.body;

	const address = new Address({
		user: req.user_id,
		full_name,
		phone ,
		address_line_1, 
		address_line_2, 
		post_code, 
		town_city, 
		state_region, 
		country, 
		delivery_instructions, 
	});

	address.save()
        .then(() => { 
			res.status(201).json({ success: `Address ${address._id} added.`, data: address });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
});

const getAddress = asyncHandler(async (req, res) => {
	const { id } = req?.params;
	const address = await Address.findOne({ _id: id })
								.select(['-created_at', '-updated_at', '-deleted_at'])
								.lean();

	if (!address) return res.status(404).json({ message: `No address matches address ${id}!` });
	res.status(200).json({ data: address });
}); 

const updateAddress = asyncHandler(async (req, res) => {
	const { full_name, 
			phone, 
			address_line_1, 
			address_line_2, 
			post_code, 
			town_city, 
			state_region, 
			country, 
			delivery_instructions } = req?.body; 

	const { id } = req?.params;

	const address = await Address.findOne({ _id: id }).exec(); 
	if (!address) return res.status(404).json({ message: "Address not found!" });

	if (full_name) address.full_name = full_name; 
	if (phone) address.phone = phone; 
	if (address_line_1) address.address_line_1 = address_line_1; 
	if (address_line_2) address.address_line_2 = address_line_2; 
	if (post_code) address.post_code = post_code; 
	if (town_city) address.town_city = town_city; 
	if (state_region) address.state_region = state_region; 
	if (country) address.country = country; 
	if (delivery_instructions) address.delivery_instructions = delivery_instructions; 

	address.save()
        .then(() => { 
			res.status(200).json({ success: `Address record updated.`, data: address });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const makeDefaultAddress = asyncHandler(async (req, res) => { 
	const { id } = req?.params; 
	const address = await Address.findOne({ _id: id }).exec();

	if (!address) return res.status(404).json({ message: `No address matches the address ${id}!` }); 

	const previousDefaultAddresses = await Address.updateMany({ default: true, user: address?.user }, { $set: { default: false } });

	if (address.default == false) address.default = true;

	// address.deleted_at = '';
	// // address.deleted_by = ''; 

	address.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted address record restored.`, data: address });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteAddress = asyncHandler(async (req, res) => { 
	const { id } = req?.params;
	const address = await Address.findOne({ _id: id }).exec();

	if (!address) return res.status(404).json({ message: `No address matches the address ${id}!` }); 

	if (address.deleted_at == '') address.deleted_at = new Date().toISOString();

	// address.deleted_at = new Date().toISOString();
	// // address.deleted_by = req?.user_id; 

	address.save()
        .then(() => { 
			res.status(200).json({ success: `Address record deleted.`, data: address });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreAddress = asyncHandler(async (req, res) => { 
	const { id } = req?.params;
	const address = await Address.findOne({ _id: id }).exec();

	if (!address) return res.status(404).json({ message: `No address matches the address ${id}!` }); 

	if (address.deleted_at != '') address.deleted_at = '';

	// address.deleted_at = '';
	// // address.deleted_by = ''; 

	address.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted address record restored.`, data: address });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyAddress = asyncHandler(async (req, res) => { 
	const { id } = req?.params;
	const address = await Address.findOne({ _id: id }).exec();

	if (!address) return res.status(404).json({ message: `No address matches the address ${id}!` }); 

	await address.deleteOne(); 

	res.status(200).json({ success: `Address ${address?._id} has been permanently deleted.`, data: `${address}` });
}); 


export { getAddresses, 
		createAddress, 
		getAddress, 
		updateAddress, 
		makeDefaultAddress, 
		deleteAddress, 
		restoreAddress, 
		destroyAddress }; 