import ejs from 'ejs'; 
import { fileURLToPath } from 'url'; 
import { dirname, join } from 'path'; 
const __dirname = dirname(fileURLToPath(import.meta.url)); 
import sendMail from '../../mails/sendMail.js'; 


const registerEmailConfirmMailTemplate = async (user) => {
    const mailSubject = `${process.env.APP_NAME + ': New Account Registration'}`; 

    const mailBody = await ejs.renderFile(join(__dirname, 'views', 'emails', 'registerEmailTemplate.ejs'), { 
        user: `${user?.first_name} ${user?.last_name}`, 
        emailConfirmLink: `${process.env.CLIENT_URL}/verify-email/${user?.username}/${user?.email_verify_token}`
    }); 

    await sendMail(process.env.EMAIL_ADDRESS, user.email, mailSubject, mailBody);
};  


export default registerEmailConfirmMailTemplate;