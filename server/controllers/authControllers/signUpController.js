import asyncHandler from 'express-async-handler'; 
import jwt from 'jsonwebtoken'; 
import User from '../../models/User.js'; 
import registerEmailConfirmMailTemplate from '../../mails/templates/registerEmailConfirmMail.js'; 
import sendMail from '../../mails/sendMail.js'; 


const signUpUser = asyncHandler(async (req, res) => {
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
        username,
        first_name,
        other_names,
        last_name,
        enterprise_name,
        email,
        phone,
        password,
        role: accountType,
        email_verify_token: emailVerifyToken
    }); 

    user.save()
        .then(function () {
            res.status(201).json({ message: `User ${user?.username} created` });
        })
        .catch(function (error) {
            return res.status(400).json({ message: "An error occured", details: `${error}` });
        });

    (async function () {
        const mailSubject = "New Account Registration";

        const mailBody = registerEmailConfirmMailTemplate(user)
        await sendMail(process.env.EMAIL_ADDRESS, user.email, mailSubject, mailBody);
    })();
}); 


export default signUpUser; 