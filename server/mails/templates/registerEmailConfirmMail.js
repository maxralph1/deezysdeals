const registerEmailConfirmMailTemplate = (user) => {
    return `
        <html>
        <h1>You just created a new account with us</h1>
        
        <p>Click on the following <a href="${process.env.BASE_URL}/api/v1/auth/verify-email/${user.username}/${user.email_verify_token}">link</a> to verify your email.</p>

        <p>Please note that this link expires in 120 minutes.</p>
        </html>
        `;
};


export default registerEmailConfirmMailTemplate;