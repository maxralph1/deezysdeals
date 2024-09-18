import nodemailer from 'nodemailer'; 
import { fileURLToPath } from 'url'; 
import { dirname, join } from 'path'; 
const __dirname = dirname(fileURLToPath(import.meta.url)); 


const sendMail = async (senderEmail, recipientEmail, subject, html) => {
    try { 

        var transporter; 

        if (process.env.NODE_ENV === 'production') {
            transporter = nodemailer.createTransport({
                // host​:​ ​"​smtp.gmail.com​"​,
                host: process.env.MAIL_HOST,
                service: process.env.MAIL_SERVICE,
                port: 587,
                secure: true,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                },
            });
        } else {
            transporter = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io", 
                port: 2525, 
                auth: {
                    user: process.env.MAILTRAP_USER, 
                    pass: process.env.MAILTRAP_PASS
                }
            }); 
        }

        await transporter.sendMail({
            from: senderEmail, 
            to: recipientEmail, 
            subject: subject, 
            html: html, 
            attachments: [
                {
                    filename: 'logo.png', // The logo file
                    path: join(__dirname, 'templates', 'images', 'logo.png'), // Adjust the path to your image
                    cid: 'logo' // Same CID as used in the img tag in the template
                }
            ]
        });

        console.log("Email sent sucessfully");

    } catch (error) {
        console.log(error, "Email not sent");
    }
};


export default sendMail; 