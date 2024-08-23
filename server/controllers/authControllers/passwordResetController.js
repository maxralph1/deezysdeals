import asyncHandler from 'express-async-handler'; 
import jwt from 'jsonwebtoken'; 
import User from '../../models/User.js'; 
import passwordResetMailTemplate from '../../mails/templates/passwordResetMail.js';
import sendMail from '../../mails/sendMail.js'; 


const mailPasswordResetLink = asyncHandler(async (req, res) => { 
    const { email } = req?.body;

    const user = await User.findOne({ email: email }).exec();

    if (!user) return res.status(400).json({ message: "Password reset link has been sent to your email if you have an account with us" });

    const passwordResetToken = jwt.sign(
        { "email": user.email }, 
        process.env.PASSWORD_RESET_TOKEN_SECRET, 
        { expiresIn: 10 * 60 }
    );

    user.password_reset_token = passwordResetToken;

    await user.save();

    const mailSubject = "Password Reset Request Link";
    const mailBody = passwordResetMailTemplate(user);

    await sendMail(process.env.EMAIL_ADDRESS, user.email, mailSubject, mailBody); 

    res.status(200).json({ success: "Password reset link has been sent to your email if you have an account with us." });
});

const verifyMailedPasswordResetLink = asyncHandler(async (req, res) => {
    const { username, token } = req?.params; 
    const { password } = req?.body; 

    const user = await User.findOne({ username: username, password_reset_token: token }).exec();

    if (!user) return res.status(400).json({ message: "Invalid link" });

    try {
        jwt.verify(
            user.password_reset_token, 
            process.env.PASSWORD_RESET_TOKEN_SECRET
        );
    } catch (error) {
        return res.status(400).json({ message: "Expired link", details: `${error}` });
    };

    user.password = password; 
    user.password_reset_token = '';

    await user.save();

    res.json({ success: "Password reset successfully" });
});


export { 
    mailPasswordResetLink, 
    verifyMailedPasswordResetLink 
};