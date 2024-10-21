import express from 'express'; 
const paymentRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getPayments, 
        createPayment, 
        getPayment, 
        updatePayment, 
        deletePayment
} from '../../controllers/paymentController.js'; 


paymentRouter.route('/')
                .get(getPayments)
                .post(authenticated, createPayment); 

paymentRouter.route('/:id')
                .get(getPayment)
                .put(updatePayment)
                .delete(deletePayment); 


export default paymentRouter; 