import asyncHandler from 'express-async-handler'; 
const cloudinaryImageUpload = require('../../config/imageUpload/cloudinary'); 
import User from '../../models/User.js'; 


const getProfile = asyncHandler(async (req, res) => {
    if (!req.user_id) {
        return res.status(403).json({ message: "User not found!" })

    } else if (req.user_id) {
        const user = await User.findOne({ _id: req.user_id })
            .select(['-password', '-email_verified', '-active', '-created_at', '-updated_at'])
            .lean();
        res.status(200).json({ data: user });
    }
});

const updateProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user_id);

    if (user) {
        user.username = req?.body?.username || user?.username;
        user.first_name = req?.body?.first_name || user?.first_name;
        user.other_names = req?.body?.other_names || user?.other_names;
        user.last_name = req?.body?.last_name || user?.last_name; 
        user.email = req?.body?.email || user?.email;
        user.phone = req?.body?.phone || user?.phone;
        user.password = req?.body?.password || user?.password;
        user.show_online_status = req?.body?.show_online_status || user?.show_online_status;

        let userImageUpload;

        if (req?.files?.user_photo) {
            const userImage = req?.files?.user_photo;

            userImageUpload = await cloudinaryImageUpload(userImage?.tempFilePath, 'tasha-best-decor-user-images'); 

            if (!userImageUpload) return res.status(409).json({ message: "Image upload failed" })
        };

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser?._id,
            username: updatedUser?.username,
            first_name: updatedUser?.first_name,
            other_names: updatedUser?.other_names,
            last_name: updatedUser?.last_name,
            email: updatedUser?.email,
            phone: updatedUser?.phone,
            password: updatedUser?.password,
            show_online_status: updatedUser?.show_online_status,
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
}); 


export {
    getProfile, 
    updateProfile
};