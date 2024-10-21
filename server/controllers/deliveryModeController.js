import asyncHandler from 'express-async-handler'; 
import DeliveryMode from '../models/DeliveryMode.js'; 


const getDeliveryModes = asyncHandler(async (req, res) => {
	const deliveryModes = await DeliveryMode.find().sort('-created_at').lean(); 
    if (!deliveryModes?.length) return res.status(404).json({ message: "No delivery modes found!" });

	res.json({ data: deliveryModes });
});

const createDeliveryMode = asyncHandler(async (req, res) => { 
    const { title, 
            description, 
            price, 
            unit_of_measurement, 
            method, 
            timeframe } = req?.body; 

    const deliveryMode = new DeliveryMode({
        added_by: req?.user_id, 
        title, 
        description, 
        price, 
        unit_of_measurement, 
        method, 
        timeframe 
    }); 

    deliveryMode.save()
        .then(() => {
            res.status(201).json({ success: `Delivery mode ${deliveryMode._id} added`, data: deliveryMode });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getDeliveryMode = asyncHandler(async (req, res) => { 
    const { id } = req?.params;
	const deliveryMode = await DeliveryMode.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!deliveryMode) return res.status(404).json({ message: `No deliveryMode matches deliveryMode ${req?.params?.id}!` });
	res.status(200).json({ data: deliveryMode });
}); 

const updateDeliveryMode = asyncHandler(async (req, res) => {
    const { title, 
            description, 
            price, 
            unit_of_measurement, 
            method, 
            timeframe } = req?.body; 

    const { id } = req?.params; 

    const deliveryMode = await DeliveryMode.findOne({ _id: id }).exec();
    if (!deliveryMode) return res.status(404).json({ message: "Delivery mode not found!" }); 

    if (title) deliveryMode.title = title; 
    if (description) deliveryMode.description = description; 
    if (price) deliveryMode.price = price; 
    if (description) deliveryMode.description = description; 
    if (unit_of_measurement) deliveryMode.unit_of_measurement = unit_of_measurement; 
    if (method) deliveryMode.method = method; 
    if (timeframe) deliveryMode.timeframe = timeframe; 

    deliveryMode.save()
        .then(() => { 
			res.status(200).json({ success: `Delivery mode record updated.`, data: deliveryMode });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteDeliveryMode = asyncHandler(async (req, res) => { 
    const { id } = req?.params; 

    const deliveryMode = await DeliveryMode.findOne({ _id: id }).exec();
    if (!deliveryMode) return res.status(404).json({ message: `No delivery mode matches the delivery mode ${id}!` }); 

    if (deliveryMode.deleted_at == '') {
        deliveryMode.deleted_at = new Date().toISOString();
        deliveryMode.deleted_by = req?.user_id;
    }

    deliveryMode.save()
        .then(() => { 
			res.status(200).json({ success: `Delivery mode record deleted.`, data: deliveryMode });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreDeliveryMode = asyncHandler(async (req, res) => { 
    const { id } = req?.params; 

    const deliveryMode = await DeliveryMode.findOne({ _id: id }).exec();
    if (!deliveryMode) return res.status(404).json({ message: `No delivery mode matches the delivery mode ${id}!` }); 

    if (deliveryMode.deleted_at != '') {
        deliveryMode.deleted_at = '';
        deliveryMode.deleted_by = '';
    }

    deliveryMode.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted delivery mode record restored.`, data: deliveryMode });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyDeliveryMode = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const deliveryMode = await DeliveryMode.findOne({ _id: id }).exec();

	if (!deliveryMode) return res.status(404).json({ message: `No delivery mode matches the delivery mode ${id}!` }); 

	await deliveryMode.deleteOne(); 

	res.status(200).json({ success: `Delivery mode ${deliveryMode?.code} has been permanently deleted.`, data: `${deliveryMode}` });
}); 


export { getDeliveryModes, 
		createDeliveryMode, 
		getDeliveryMode, 
		updateDeliveryMode, 
		deleteDeliveryMode, 
        restoreDeliveryMode, 
        destroyDeliveryMode }; 