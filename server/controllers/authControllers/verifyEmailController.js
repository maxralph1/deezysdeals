import asyncHandler from 'express-async-handler'; 
import jwt from 'jsonwebtoken'; 
import User from '../../models/User.js'; 


const verifyMailLinkAuthenticate = asyncHandler(async (req, res) => {
    try {
        const user = await User.findOne({ username: req?.params?.username, email_verify_token: req?.params?.token }).exec();

        if (!user) return res.status(400).send("Invalid/expired link");

        try {
            jwt.verify(user?.email_verify_token, process.env.EMAIL_VERIFY_TOKEN_SECRET); 
        } catch (error) {
            return res.status(400).send("Verification failed");
        }

        user.email_verified = new Date().toISOString();;
        user.email_verify_token = ''; 
        user.online = true;
        user.last_time_active = ''; 

        const access = jwt.sign(
            {
                "user": {
                    "user_id": user._id, 
                    "username": user.username, 
                    "first_name": user.first_name, 
                    "other_names": user.other_names, 
                    "last_name": user.last_name, 
                    "user_image": user.user_image_path.url, 
                    "enterprise_name": user.enterprise_name, 
                    "email": user.email, 
                    "phone": user.phone, 
                    "address": user.address, 
                    "role": user.role, 
                    "verified": user.verified, 
                }
            }, 
            process.env.ACCESS_TOKEN_SECRET, 
            { expiresIn: 60 * 60 }
        ); 

        const refresh = jwt.sign(
            { "user_id": user._id }, 
            process.env.REFRESH_TOKEN_SECRET, 
            { expiresIn: 60 * 60 }
        ); 

        user.save()
            .then(function () {
                res.cookie('jwt', refresh, {
                    httpOnly: true, 
                    secure: false, 
                    sameSite: 'None', 
                    maxAge: 1 * 60 * 60 * 1000      // 1 hour
                });

                res.json({ access })
            })
            .catch(function (error) {
                return res.status(400).json(error);
            });

    } catch (error) {
        res.status(400).json({ message: "An error occured", details: `${error}` });
    }
});


export default verifyMailLinkAuthenticate; 