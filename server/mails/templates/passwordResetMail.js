import ejs from 'ejs'; 
import { fileURLToPath } from 'url'; 
import { dirname, join } from 'path'; 
const __dirname = dirname(fileURLToPath(import.meta.url)); 
import sendMail from '../../mails/sendMail.js'; 


const passwordResetMailTemplate = async (user) => { 
    const mailSubject = `${process.env.APP_NAME + ': Password Reset Request'}`; 

    const mailBody = await ejs.renderFile(join(__dirname, 'views', 'emails', 'passwordResetEmailTemplate.ejs'), {
        user: `${user?.first_name} ${user?.last_name}`, 
        passwordResetLink: `${process.env.CLIENT_URL}/password-reset/${user.username}/${user.password_reset_token}`
    }); 

    await sendMail(process.env.EMAIL_ADDRESS, user.email, mailSubject, mailBody); 
};


export default passwordResetMailTemplate;