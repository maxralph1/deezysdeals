import express from 'express'; 
const authRouter = express.Router(); 
import signUpUser from '../../controllers/authControllers/signUpController.js'; 
import verifyMailLinkAuthenticate from '../../controllers/authControllers/verifyEmailController.js'; 
import signInUser from '../../controllers/authControllers/signInController.js';  
import refreshTokenHandler from '../../controllers/authControllers/refreshTokenController.js'; 
import signOutUser from '../../controllers/authControllers/signOutController.js'; 
import { mailPasswordResetLink, verifyMailedPasswordResetLink } from '../../controllers/authControllers/passwordResetController.js';  
import signInLimiter from '../../middleware/loginLimiter.js'; 


authRouter.post('/sign-up', signUpUser); 
authRouter.post('/verify-email/:username/:token', verifyMailLinkAuthenticate); 
authRouter.post('/sign-in', signInLimiter, signInUser); 
authRouter.get('/refresh-token', refreshTokenHandler); 
authRouter.post('/sign-out', signOutUser); 
authRouter.post('/password-reset', mailPasswordResetLink); 
authRouter.post('/password-reset/:username/:token', verifyMailedPasswordResetLink); 


export default authRouter; 