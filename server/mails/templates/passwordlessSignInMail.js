import ejs from 'ejs'; 
import { fileURLToPath } from 'url'; 
import { dirname, join } from 'path'; 
const __dirname = dirname(fileURLToPath(import.meta.url)); 
import sendMail from '../../mails/sendMail.js'; 


const passwordlessSignInMailTemplate = async (user) => { 
    const mailSubject = `${process.env.APP_NAME + ': Passwordless Sign In Request'}`; 

    const mailBody = await ejs.renderFile(join(__dirname, 'views', 'emails', 'passwordlessSignInEmailTemplate.ejs'), { 
        user: `${user?.first_name} ${user?.last_name}`, 
        signInLink: `${process.env.CLIENT_URL}/passwordless-signin/${user?.username}/${user?.auth_token}`
    }); 

    await sendMail(process.env.EMAIL_ADDRESS, user.email, mailSubject, mailBody); 
};


export default passwordlessSignInMailTemplate;