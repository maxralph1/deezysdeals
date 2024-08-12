const passwordResetMailTemplate = (user) => {
    return `
        <html>
        <h1>Password reset message</h1>
        
        <p>Click on the following <a href="${process.env.BASE_URL}/api/v1/auth/password-reset/${user.username}/${user.password_reset_token}">link</a> to reset your password.</p>

        <p>Please note that this link expires in 10 minutes.</p>
        </html>
        `;
};


export default passwordResetMailTemplate;