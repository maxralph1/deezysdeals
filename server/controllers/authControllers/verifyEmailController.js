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

        await user.save();

        res.json({ message: "Email verification sucessful." });
    } catch (error) {
        res.status(400).json({ message: "An error occured", details: `${error}` });
    }
});


export default verifyMailLinkAuthenticate; 