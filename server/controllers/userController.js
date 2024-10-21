import asyncHandler from 'express-async-handler'; 
import User from '../models/User.js'; 
import Order from '../models/Order.js'; 
import OrderItem from '../models/OrderItem.js'; 
import Product from '../models/Product.js'; 


const getUsers = asyncHandler(async (req, res) => { 
    const current_page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10; 
    const roleQuery = req?.query?.role; 

    console.log(roleQuery); 

    const skip = (current_page - 1) * limit; 

    if ((roleQuery == 'admin') || (roleQuery == 'dispatcher') || (roleQuery == 'enterprise') || (roleQuery == 'individual')) {
        const users = await User.find({ role: roleQuery, deleted_at: null })
                            .sort('-created_at')
                            .skip(skip)
                            .limit(limit)
                            .lean(); 

        if (!users?.length) return res.status(404).json({ message: "No users found!" }); 

        const usersCount = await User.find({ role: roleQuery, deleted_at: null }).countDocuments(); 

        res.json({ 
                    meta: {
                        current_page, 
                        limit, 
                        total_pages: Math.ceil(usersCount / limit), 
                        total_results: usersCount 
                    }, 
                    data: users 
                });
    } else {
        const users = await User.find({ deleted_at: null })
                            .sort('-created_at')
                            .skip(skip)
                            .limit(limit)
                            .lean(); 

        if (!users?.length) return res.status(404).json({ message: "No users found!" }); 

        const usersCount = await User.find({ deleted_at: null }).countDocuments(); 

        res.json({ 
                    meta: {
                        current_page, 
                        limit, 
                        total_pages: Math.ceil(usersCount / limit), 
                        total_results: usersCount 
                    }, 
                    data: users 
                }); 

    } 
});


const getAdmins = asyncHandler(async (req, res) => { 
    const current_page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10; 

    const skip = (current_page - 1) * limit; 

	const users = await User.find({ deleted_at: null })
                            .sort('-created_at')
                            .skip(skip)
                            .limit(limit)
                            .lean(); 

    if (!users?.length) return res.status(404).json({ message: "No users found!" }); 

    const usersCount = await User.find({ deleted_at: null }).countDocuments(); 

	res.json({ 
                meta: {
                    current_page, 
                    limit, 
                    total_pages: Math.ceil(usersCount / limit), 
                    total_results: usersCount 
                }, 
                data: users 
            });
});


const getClients = asyncHandler(async (req, res) => { 
    const current_page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10; 

    const skip = (current_page - 1) * limit; 

	const users = await User.find({ deleted_at: null })
                            .sort('-created_at')
                            .skip(skip)
                            .limit(limit)
                            .lean(); 

    if (!users?.length) return res.status(404).json({ message: "No users found!" }); 

    const usersCount = await User.find({ deleted_at: null }).countDocuments(); 

	res.json({ 
                meta: {
                    current_page, 
                    limit, 
                    total_pages: Math.ceil(usersCount / limit), 
                    total_results: usersCount 
                }, 
                data: users 
            });
});

const createUser = asyncHandler(async (req, res) => {
    const { username, 
            first_name, 
            other_names, 
            last_name, 
            enterprise_name, 
            email, 
            phone, 
            password, 
            account_type } = req?.body; 

    const duplicateUsername = await User.findOne({ username: username }).lean(); 
    const duplicateEmail = await User.findOne({ email: email }).lean(); 

    if (duplicateUsername) {
        return res.status(409).json({ message: `Username ${duplicateUsername.username} already exists` });
    } else if (duplicateEmail) {
        return res.status(409).json({ message: `User email ${duplicateEmail.email} already exists` });
    }; 

    const emailVerifyToken = jwt.sign(
        { "username": username }, 
        process.env.EMAIL_VERIFY_TOKEN_SECRET, 
        { expiresIn: 20 * 60 }
    ); 

    let accountType;

    if (!account_type) {
        accountType = "individual";
    } else if (account_type && account_type == "individual") {
        accountType = "individual";
    } else if (account_type && account_type == "enterprise") {
        accountType = "enterprise";
    }; 

    const user = new User({
        user: req?.user_id, 
        username, 
        first_name, 
        other_names, 
        last_name, 
        enterprise_name, 
        email, 
        phone, 
        password, 
        role: accountType,
        email_verify_token: emailVerifyToken, 
        email_verified: new Date().toISOString()
    }); 

    user.save()
        .then(() => {
            res.status(201).json({ success: `User ${user._id} added`, data: user });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        }); 

    (async function () {
        const mailSubject = "New Account Registration";

        const mailBody = registerEmailConfirmMailTemplate(user)
        await sendMail(process.env.EMAIL_ADDRESS, user.email, mailSubject, mailBody);
    })();
}); 

const getUser = asyncHandler(async (req, res) => { 
    const { username } = req?.params; 

    // console.log(username); 

	// const userFound = await User.findOne({ username: username }).lean(); 

	const userFound = await User.findOne({ username: username })
                                .select(['-created_at', '-updated_at', '-deleted_at'])
                                .exec(); 

	if (!userFound) return res.status(404).json({ message: `No user matches user @${username}!` }); 

    // // Query optimization 
    // // Orders
    // const orders_current_page = parseInt(req?.query?.orderPage) || 1;
    // const orders_limit = parseInt(req?.query?.orderLimit) || 10; 
    // const orders_skip = (orders_current_page - 1) * limit; 

    // // Products
    // const products_current_page = parseInt(req?.query?.productPage) || 1;
    // const products_limit = parseInt(req?.query?.productLimit) || 10; 
    // const products_skip = (products_current_page - 1) * limit; 

    // let userDetails = []; 

    // userDetails.push(user); 

    // const updatePromises = async () => { 
    //     // Orders
    //     const orders = await Order.find({ user: user?._id, deleted_at: null })
    //                             .sort('-created_at')
    //                             .skip(products_skip)
    //                             .limit(products_limit)
    //                             .populate({
    //                                 path: 'user', 
    //                                 select: 'first_name last_name username' 
    //                             })
    //                             .lean(); 

    //     const updateOrderPromises = orders?.map(async order => {
    //         let foundOrderItems = await OrderItem.find({ order: order?._id })
    //                                             .populate({
    //                                                 path: 'product', 
    //                                             })
    //                                             .exec(); 
    //         order['orderItems'] = foundOrderItems; 

    //         userDetails.push(order); 
    //     }); 

    //     // Order Items 
    //     const orderItems = await OrderItem.find({ user: user?._id, deleted_at: null }); 

    //     userDetails.push(orderItems);

    //     // Payments
    //     const payments = await Payment.find({ user: user?._id, deleted_at: null }); 

    //     userDetails.push(payments);
    // } 

    // await Promise.all(updatePromises); 

	res.status(200).json({ data: userFound }); 
    // res.json({ 
    //             meta: {
    //                 // current_page, 
    //                 // limit, 
    //                 // total_pages: Math.ceil(ordersCount / limit), 
    //                 // total_results: ordersCount, 
    //             }, 
    //             data: userDetails 
    //         });
}); 

const getAdmin = asyncHandler(async (req, res) => { 
    const { username } = req?.params;
	const user = await User.findOne({ username: username })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!user) return res.status(404).json({ message: `No user matches user ${username}!` });
	res.status(200).json({ data: user });
}); 

const getClient = asyncHandler(async (req, res) => { 
    const { username } = req?.params;
	const user = await User.findOne({ username: username })
		.select(['-created_at', '-updated_at', '-deleted_at'])
		.lean();

	if (!user) return res.status(404).json({ message: `No user matches user ${username}!` });
	res.status(200).json({ data: user });
}); 

const updateUser = asyncHandler(async (req, res) => {
    const { first_name, 
            other_names, 
            last_name, 
            enterprise_name, 
            email, 
            phone, 
            password, 
            account_type } = req?.body; 

    const { username } = req?.params; 

    const user = await User.findOne({ username: username }).exec();
    if (!user) return res.status(404).json({ message: "User not found!" }); 

    let accountType;

    if (!account_type) {
        accountType = "individual";
    } else if (account_type && account_type == "individual") {
        accountType = "individual";
    } else if (account_type && account_type == "enterprise") {
        accountType = "enterprise";
    }; 

    if (first_name) user.first_name = first_name; 
    if (last_name) user.last_name = last_name; 
    if (enterprise_name) user.enterprise_name = enterprise_name; 
    if (email) user.email = email; 
    if (phone) user.phone = phone; 
    if (password) user.password = password; 
    if (account_type) user.role = accountType; 

    user.save()
        .then(() => { 
			res.status(200).json({ success: `User record updated.`, data: user });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const user = await User.findOne({ _id: id }).exec();

    if (!user) return res.status(404).json({ message: `No user matches the user ${id}!` }); 

    if (user.deleted_at == '') {
        user.deleted_at = new Date().toISOString();
        user.deleted_by = req?.user_id;
    }

    user.save()
        .then(() => { 
			res.status(200).json({ success: `User record deleted.`, data: user });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const restoreUser = asyncHandler(async (req, res) => {
    const { id } = req?.params; 
    const user = await User.findOne({ _id: id }).exec();

    if (!user) return res.status(404).json({ message: `No user matches the user ${id}!` }); 

    if (user.deleted_at != '') {
        user.deleted_at = '';
        user.deleted_by = '';
    };

    user.save()
        .then(() => { 
			res.status(200).json({ success: `Deleted user record restored.`, data: user });
        })
        .catch((error) => {
            if (error) return res.status(400).json({ message: "An error occured!", details: `${error}` }); 
        });
}); 

const destroyUser = asyncHandler(async (req, res) => {
    const { id } = req?.params;
	const user = await User.findOne({ _id: id }).exec();

	if (!user) return res.status(404).json({ message: `No user matches the user ${id}!` }); 

	await user.deleteOne(); 

	res.status(200).json({ success: `User ${user?._id} has been permanently deleted.`, data: `${user}` });
}); 


export { getUsers, 
        getAdmins, 
        getClients, 
		createUser, 
		getUser, 
        getAdmin, 
        getClient, 
		updateUser, 
		deleteUser, 
        restoreUser, 
        destroyUser }; 