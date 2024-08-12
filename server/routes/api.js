import express from 'express'; 

const router = express.Router();
import authRouter from './apiRoutes/authRoutes.js'; 


router.use('/auth', authRouter); 


export default router;