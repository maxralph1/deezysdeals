import axios from 'axios'; 
import asyncHandler from 'express-async-handler'; 
import { paypalCreateOrder, paypalCaptureOrder } from '../utils/paypal-api.js'; 
import Category from '../models/Category.js'; 
import Product from '../models/Product.js'; 
import ProductImage from '../models/ProductImage.js'; 
import Order from '../models/Order.js'; 
import OrderItem from '../models/OrderItem.js'; 


const getOrders = asyncHandler(async (req, res) => { 
    // console.log(req?.query)
    const current_page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10; 

    const skip = (current_page - 1) * limit; 

	const orders = await Order.find({ deleted_at: null })
                            .sort('-created_at')
                            .skip(skip)
                            .limit(limit)
                            .populate({
                                path: 'user', 
                                select: 'first_name last_name username' 
                            })
                            .lean(); 
    if (!orders?.length) return res.status(404).json({ message: "No orders found!" }); 

    // Orders count 
    const ordersCount = await Order.find({ deleted_at: null }).countDocuments(); 

    let ordersList = []; 

    const updatePromises = orders?.map(async order => { 
        let foundOrderItems = await OrderItem.find({ order: order?._id })
                                            .populate({
                                                path: 'product', 
                                            })
                                            .exec(); 
        order['orderItems'] = foundOrderItems; 

        ordersList.push(order);
    }); 

    await Promise.all(updatePromises); 

    // Orders sum 
    let totalPaid;
    async function calculateTotalAmount() {
        try {
            const total = await Order.aggregate([
                {
                    // $match: { paid: true, deleted_at: { $exists: false } }
                    // $match: { deleted_at: { $exists: false } }
                    $match: { deleted_at: null }
                },
                {
                    $group: {
                    _id: null,
                    // totalAmount: { $sum: "$total_paid" }
                    totalAmount: { $sum: "$total_to_be_paid" }
                    }
                }
            ]);

            totalPaid = total.length > 0 ? total[0].totalAmount : 0;
            console.log('Total Amount:', totalPaid);
        } catch (error) {
            console.error('Error calculating total amount:', error);
        }
    } 

    await calculateTotalAmount(); 

	// res.json({ data: orders, count: ordersCount, total_amount: totalPaid }); 
    res.json({ 
                meta: {
                    current_page, 
                    limit, 
                    total_pages: Math.ceil(ordersCount / limit), 
                    total_results: ordersCount, 
                    total_amount: totalPaid
                }, 
                data: ordersList 
            });
});

const createOrder = asyncHandler(async (req, res) => {
    const { cart, 
            delivery_mode, 
            payment_mode, 
            // billing_status, 
            // total_to_be_paid, 
            full_name, 
            email, 
            phone, 
            address_line_1, 
            address_line_2, 
            post_code, 
            town_city, 
            state_region, 
            country, 
            delivery_instructions } = req?.body; 

    // console.log(req?.body); 
    console.log(req); 

    // Internal record for Order
    // let proposed_delivery_start_date; 
    // if (delivery_mode != null) proposed_delivery_start_date = Date.now(); 

    // let proposed_delivery_destination_reach_date; 
    // if (delivery_mode == 'express') proposed_delivery_destination_reach_date = Date.now();
    // if (delivery_mode == 'business') proposed_delivery_destination_reach_date = Date.now();
    // if (delivery_mode == 'casual') proposed_delivery_destination_reach_date = Date.now(); 

    const newOrder = await Order.create({
        user: req?.user_id, 
        // order_items: items.map(item => ({
        //     ...item, 
        //     product: item?._id, 
        //     _id: undefined
        // })),
        // delivery_mode, 
        // payment_mode, 
        billing_status: 'unpaid', 
        // total_to_be_paid, 
        // proposed_delivery_start_date,
        // proposed_delivery_destination_reach_date,
        full_name: 'test name', 
        email: 'test@email.com', 
        phone: '+123456789', 
        address_line_1: '123 Test Avenue', 
        // address_line_2, 
        post_code: '12345', 
        town_city: 'Test City', 
        state_region: 'Owerri', 
        country: 'USA', 
        delivery_instructions: 'Must be dropped at the door.' 
    }); 

    let totalToBePaid = 0;

    if (cart && cart?.length === 0) { 

        return res.status(400).json({ message: 'No order items. You must add at least one item!' }); 

    } else if (cart && cart?.length > 0) { 
        // cart?.map(item => { 
        const cartResolve = cart?.map(async (item, index) => { 
            async function fetchProduct() {
                try {
                    const response = await axios.get(`https://fakestoreapi.com/products/${item?.id}`);
                    // console.log('Response:', response?.data); 

                    // Create new product (order item), if does not exist
                    const productFilter = { title: response?.data?.title }; 
                    const productUpdate = { added_by: req?.user_id, 
                                            title: response?.data?.title, 
                                            retail_price: response?.data?.price, 
                                            images: [response?.data?.image] };

                    const upsertProduct = await Product.findOneAndUpdate(productFilter, productUpdate, {
                        new: true,
                        upsert: true 
                    }); 
                    console.log(upsertProduct); 

                    // Create new product Image (order item image), if does not exist
                    const productImageFilter = { 'image_path.url': response?.data?.image }; 
                    const productImageUpdate = { $set: { product: upsertProduct?._id,
                                                        'image_path.$.url': response?.data?.image } }; 

                    const upsertProductImage = await ProductImage.findOneAndUpdate(productImageFilter, productImageUpdate, {
                        new: true,
                        upsert: true 
                    }); 
                    console.log(upsertProductImage); 

                    const newOrderItem = await OrderItem.create({
                        user: req?.user_id, 
                        product: upsertProduct?._id, 
                        order: newOrder?._id, 
                        quantity: item?.quantity, 
                        price: upsertProduct?.retail_price
                    }); 

                    // console.log({'Test': newOrderItem?.price * newOrderItem?.quantity}); 

                    let orderItemPrice = newOrderItem?.price * newOrderItem?.quantity; 
                    totalToBePaid += orderItemPrice; 
                    // console.log({ 'totaltobe': totalToBePaid }); 
                    // console.log({'Cart length:': cart?.length}); 
                    // console.log({'Index': index}); 

                    if ((cart?.length) == index+1) { 
                        console.log({ 'totaltobe': totalToBePaid }); 
                        await Order.findOneAndUpdate({ _id: newOrder?._id }, { total_to_be_paid: totalToBePaid }); 
                    }

                    // Create new category, if does not exist 
                    const categoryFilter = { name: response?.data?.category }; 
                    const categoryUpdate = { added_by: req?.user_id }; 

                    const upsertCategory = await Category.findOneAndUpdate(categoryFilter, categoryUpdate, {
                        new: true, 
                        upsert: true 
                    }); 
                    console.log(upsertCategory); 

                } catch (error) {
                    console.error('Error:', error);
                } 
            }
            fetchProduct(); 

            
        }); 

        await Promise.all(cartResolve); 

    }

    // PayPal record & processing for Order
    // const order = await paypal.createOrder(req?.body?.paymentSource);
    // const order = await paypal.createOrder('paypal');
    // console.log({'order': order}); 
    // async function payPalProcessing() {
    //     try {
    //         // use the cart information passed from the front-end to calculate the order amount detals
    //         const { jsonResponse, httpStatusCode } = await createOrder(cart);
    //         res.status(httpStatusCode).json(jsonResponse);
    //     } catch (error) {
    //         console.error("Failed to create order:", error);
    //         res.status(500).json({ error: "Failed to create order." });
    //     } 
    // } 

    function paypalOrderCreate(cart) {
        paypalCreateOrder(cart)
            .then(({ jsonResponse, httpStatusCode }) => {
                res.status(httpStatusCode).json({
                    jsonResponse, 
                    data: { 'order': newOrder}
                }); 
                // res.status(201).json({ success: `Order ${newOrder._id} added`, data: { 'order': newOrder} }); 
            })
            .catch(error => {
                console.error("Failed to create order:", error);
                res.status(500).json({ error: "Failed to create order." });
            });
    }
    paypalOrderCreate();

    console.log(cart); 


    // newOrder.save()
    //     .then(() => {
    //         res.status(201).json({ success: `Order ${newOrder._id} added`, data: newOrder });
    //     })
    //     .catch((error) => {
    //         if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
    //     }); 

    // res.status(201).json({ success: `Order ${newOrder._id} added`, 
    //                         data: { 'order-paypal': order, 'order': newOrder} }); 
}); 

const captureOrder = asyncHandler(async (req, res) => {
	// const order = await Order.findOne({ _id: req?.params?.id })
	// 	.select(['-created_at', '-updated_at', '-deleted_at'])
	// 	.lean();

	// if (!order) return res.status(404).json({ message: `No order matches order ${req?.params?.id}!` }); 

    // const orderItems = await OrderItem.find({ order: order?._id }).lean();
    
	// res.status(200).json({ data: {
    //     order, order_items: orderItems
    // } }); 

    // try {
    //     const { id } = req.params;
    //     const { jsonResponse, httpStatusCode } = await captureOrder(id);
    //     res.status(httpStatusCode).json(jsonResponse);
    // } catch (error) {
    //     console.error("Failed to create order:", error);
    //     res.status(500).json({ error: "Failed to capture order." });
    // } 


    const { id } = req.params;

    function paypalOrderCapture() {
        paypalCaptureOrder(id)
            .then(({ jsonResponse, httpStatusCode }) => {
                res.status(httpStatusCode).json(jsonResponse);
            })
            .catch(error => {
                console.error("Failed to capture order:", error);
                res.status(500).json({ error: "Failed to capture order." });
            }); 
    }; 
    paypalOrderCapture();
}); 

const getOrder = asyncHandler(async (req, res) => {
	const order = await Order.findOne({ _id: req?.params?.id })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!order) return res.status(404).json({ message: `No order matches order ${req?.params?.id}!` }); 

    const orderItems = await OrderItem.find({ order: order?._id }).lean();
    
	res.status(200).json({ data: {
        order, order_items: orderItems
    } });
}); 

const updateOrder = asyncHandler(async (req, res) => {
    const { delivery_mode, 
            payment_mode, 
            order_key, 
            billing_status, 
            total_to_be_paid, 
            total_paid, 
            total_balance, 
            proposed_delivery_start_date, 
            proposed_delivery_destination_reach_date, 
            full_name, 
            email, 
            phone, 
            address_line_1, 
            address_line_2, 
            post_code, 
            town_city, 
            state_region, 
            country, 
            delivery_instructions } = req?.body;  

    const { id } = req?.params; 

    const order = await Order.findOne({ _id: id }).exec();
    if (!order) return res.status(404).json({ message: "Order not found!" }); 

    if (delivery_mode) order.delivery_mode = delivery_mode; 
    if (payment_mode) order.payment_mode = payment_mode; 
    if (order_key) order.order_key = order_key; 
    if (billing_status) order.billing_status = billing_status; 
    if (total_to_be_paid) order.total_to_be_paid = total_to_be_paid; 
    if (total_paid) order.total_paid = total_paid; 
    if (total_balance) order.total_balance = total_balance; 
    if (proposed_delivery_start_date) order.proposed_delivery_start_date = proposed_delivery_start_date; 
    if (proposed_delivery_destination_reach_date) order.proposed_delivery_destination_reach_date = proposed_delivery_destination_reach_date; 
    if (full_name) order.full_name = full_name; 
    if (email) order.email = email; 
    if (phone) order.phone = phone; 
    if (address_line_1) order.address_line_1 = address_line_1; 
    if (address_line_2) order.address_line_2 = address_line_2; 
    if (post_code) order.post_code = post_code; 
    if (town_city) order.town_city = town_city; 
    if (state_region) order.state_region = state_region; 
    if (country) order.country = country; 
    if (delivery_instructions) order.delivery_instructions = delivery_instructions; 

    order.save()
        .then(() => { 
			res.status(200).json({ success: `Order record updated.`, data: order });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteOrder = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const order = await Order.findOne({ _id: id }).exec();

    if (!order) return res.status(404).json({ message: `No order matches the order ${id}!` }); 

    if (order.deleted_at == '') {
        order.deleted_at = new Date().toISOString();
        order.deleted_by = req?.user_id;
    }

    order.save()
        .then(() => { 
			res.status(200).json({ success: `Order record deleted.`, data: order });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreOrder = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const order = await Order.findOne({ _id: id }).exec();

    if (!order) return res.status(404).json({ message: `No order matches the order ${id}!` }); 

    if (order.deleted_at != '') {
        order.deleted_at = '';
        order.deleted_by = '';
    };

    order.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted order record restored.`, data: order });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyOrder = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const order = await Order.findOne({ _id: id }).exec();

	if (!order) return res.status(404).json({ message: `No order matches the order ${id}!` }); 

	await order.deleteOne(); 

	res.status(200).json({ success: `Order ${order?.code} has been permanently deleted.`, data: `${order}` });
}); 


export { getOrders, 
		createOrder, 
        captureOrder, 
		getOrder, 
		updateOrder, 
		deleteOrder, 
        restoreOrder, 
        destroyOrder }; 