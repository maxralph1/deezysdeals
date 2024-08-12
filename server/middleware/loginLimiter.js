import rateLimit from 'express-rate-limit'; 
import { logEvents } from '../config/errorLogger.js'; 


const signInLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,       // 5 minutes 
    max: 5,     // Limit each IP to 5 requests per 'window' per minute 
    message: { message: 'Too many login attempts from this IP, please try again after a 5 minutes.' }, 
    handler: (req, res, next, options) => {
        logEvents(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log'); 
        res.status(options.statusCode).send(options.message); 
    }, 
    standardHeaders: true,      // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false,       // Disable the `X-RateLimit-*` headers
}); 


export default signInLimiter;