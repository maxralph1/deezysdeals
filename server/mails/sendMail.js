import nodemailer from 'nodemailer'; 


const sendMail = async (senderEmail, recipientEmail, subject, html) => {
    try {
        // const transporter = nodemailer.createTransport({
            //   // host​:​ ​"​smtp.gmail.com​"​,
        //     host: process.env.HOST,
        //     service: process.env.SERVICE,
        //     port: 587,
        //     secure: true,
        //     auth: {
        //         user: process.env.MAIL_USER,
        //         pass: process.env.MAIL_PASS,
        //     },
        // });
        
        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io", 
            port: 2525, 
            auth: {
                user: process.env.MAILTRAP_USER, 
                pass: process.env.MAILTRAP_PASS
            }
        }); 

        await transporter.sendMail({
            from: senderEmail, 
            to: recipientEmail, 
            subject: subject, 
            html: html
        });

        console.log("Email sent sucessfully");

    } catch (error) {
        console.log(error, "Email not sent");
    }
};


export default sendMail; 