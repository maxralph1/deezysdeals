import asyncHandler from 'express-async-handler'; 
import jwt from 'jsonwebtoken'; 
import User from '../../models/User.js'; 
import passwordlessSignInMailTemplate from '../../mails/templates/passwordlessSignInMail.js'; 
import sendMail from '../../mails/sendMail.js'; 


const passwordlessSignInRequest = asyncHandler(async (req, res) => { 
    const { username } = req?.body; 

    const userFound = await User.findOne({ username: username }).exec(); 

    if (!userFound) return res.status(401).json({ message: "Registered user email has been notified with the sign-in link." }); 

    if (!userFound?.active) return res.status(401).json({ message: "Unauthorized" }); 

    if (!userFound?.email_verified) return res.status(401).json({ message: "You must verify your email before you can sign into your account" }); 

    const signInToken = jwt.sign(
        { 'username': userFound?.username }, 
        process.env.SIGN_IN_TOKEN_SECRET, 
        { expiresIn: 20 * 60 }
    ); 

    userFound.auth_token = signInToken; 

    userFound.save()
        .then(function () {
            res.status(200).json({ success: 'Registered user email has been notified with the sign-in link.'})
        })
        .catch(function (error) {
            return res.status(400).json({ message: "An error occured", details: `${error}` });
        }); 

    (async function () {
        const mailSubject = "Passwordless Sign In Link";
        const mailBody = passwordlessSignInMailTemplate(userFound); 

        await sendMail(process.env.EMAIL_ADDRESS, userFound?.email, mailSubject, mailBody);
    })();
}); 

const passwordlessSignIn = asyncHandler(async (req, res) => {
    try { 
        const { username, token } = req?.params; 

        const userFound = await User.findOne({ username: username, auth_token: token }).exec();

        if (!userFound) return res.status(400).send("Invalid link"); 

        try {
            jwt.verify(
                userFound?.auth_token, 
                process.env.SIGN_IN_TOKEN_SECRET); 
        } catch (error) {
            return res.status(400).json({ message: "Expired link", details: `${error}` });
        } 

        const access = jwt.sign(
            {
                "user": {
                    "user_id": userFound._id, 
                    "username": userFound.username, 
                    "first_name": userFound.first_name, 
                    "other_names": userFound.other_names, 
                    "last_name": userFound.last_name, 
                    "user_image": userFound.user_image_path.url, 
                    "enterprise_name": userFound.enterprise_name, 
                    "email": userFound.email, 
                    "phone": userFound.phone, 
                    "address": userFound.address, 
                    "role": userFound.role, 
                    "verified": userFound.verified, 
                }
            }, 
            process.env.ACCESS_TOKEN_SECRET, 
            { expiresIn: 60 * 60 }
        );

        const refresh = jwt.sign(
            { "user_id": userFound._id }, 
            process.env.REFRESH_TOKEN_SECRET, 
            { expiresIn: 60 * 60 }
        ); 

        userFound.auth_token = ''; 
        userFound.online = true;
        userFound.last_time_active = ''; 

        userFound.save()
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


export {
    passwordlessSignInRequest, 
    passwordlessSignIn
}