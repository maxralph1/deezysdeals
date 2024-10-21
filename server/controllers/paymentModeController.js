import asyncHandler from 'express-async-handler'; 
import PaymentMode from '../models/PaymentMode.js'; 


const getPaymentModes = asyncHandler(async (req, res) => {
	const paymentModes = await PaymentMode.find().sort('-created_at').lean(); 
    if (!paymentModes?.length) return res.status(404).json({ message: "No payment modes found!" });

	res.json({ data: paymentModes });
});

const createPaymentMode = asyncHandler(async (req, res) => {
    const { title, 
            description } = req?.body; 

    const paymentMode = new PaymentMode({
        user: req?.user_id, 
        title, 
        description
    }); 

    paymentMode.save()
        .then(() => {
            res.status(201).json({ success: `PaymentMode ${paymentMode._id} added`, data: paymentMode });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const getPaymentMode = asyncHandler(async (req, res) => { 
    const { id } = req?.params;

	const paymentMode = await PaymentMode.findOne({ _id: id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!paymentMode) return res.status(404).json({ message: `No payment mode matches payment mode ${id}!` });
	res.status(200).json({ data: paymentMode });
}); 

const updatePaymentMode = asyncHandler(async (req, res) => {
    const { title, 
            description } = req?.body;  

    const { id } = req?.params; 

    const paymentMode = await PaymentMode.findOne({ _id: id }).exec();
    if (!paymentMode) return res.status(404).json({ message: "Payment mode not found!" }); 

    if (title) paymentMode.title = title; 
    if (description) paymentMode.description = description; 

    paymentMode.save()
        .then(() => { 
			res.status(200).json({ success: `Payment mode record updated.`, data: paymentMode });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deletePaymentMode = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const paymentMode = await PaymentMode.findOne({ _id: id }).exec();

    if (!paymentMode) return res.status(404).json({ message: `No payment mode matches the payment mode ${id}!` }); 

    if (paymentMode.deleted_at == '') {
        paymentMode.deleted_at = new Date().toISOString();
        paymentMode.deleted_by = req?.user_id;
    }

    paymentMode.save()
        .then(() => { 
			res.status(200).json({ success: `Payment mode record deleted.`, data: paymentMode });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restorePaymentMode = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const paymentMode = await PaymentMode.findOne({ _id: id }).exec();

    if (!paymentMode) return res.status(404).json({ message: `No payment mode matches the payment mode ${id}!` }); 

    if (paymentMode.deleted_at != '') {
        paymentMode.deleted_at = '';
        paymentMode.deleted_by = '';
    };

    paymentMode.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted payment mode record restored.`, data: paymentMode });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyPaymentMode = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const paymentMode = await PaymentMode.findOne({ _id: id }).exec();

	if (!paymentMode) return res.status(404).json({ message: `No payment mode matches the payment mode ${id}!` }); 

	await paymentMode.deleteOne(); 

	res.status(200).json({ success: `PaymentMode ${paymentMode?._id} has been permanently deleted.`, data: `${paymentMode}` });
}); 


export { getPaymentModes, 
		createPaymentMode, 
		getPaymentMode, 
		updatePaymentMode, 
		deletePaymentMode, 
        restorePaymentMode, 
        destroyPaymentMode }; 