const passwordlessSignInMailTemplate = (userFound) => {
    return `
        <html>
        <h1>You just requested for a passwordless sign in link</h1>
        
        <p>Click on the following <a href="${process.env.CLIENT_URL}/passwordless-signin/${userFound?.username}/${userFound?.auth_token}">link</a> to sign into your account.</p>
        
        <p>Please note that this link expires in 120 minutes.</p> 

        <p>This link can be used only once.</p>

        <p>If you did not request for this link, kindly ignore this message. If you suspect that your account has been compromised, kindly report to the email address: report@${process.env.BASE_URL}</p> 
        </html>
        `;
};


export default passwordlessSignInMailTemplate;