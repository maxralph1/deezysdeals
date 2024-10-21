import express from 'express'; 
const paymentModeRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getPaymentModes, 
        createPaymentMode, 
        getPaymentMode, 
        updatePaymentMode, 
        deletePaymentMode,
        restorePaymentMode, 
        destroyPaymentMode
} from '../../controllers/paymentModeController.js'; 


paymentModeRouter.route('/')
                .get(getPaymentModes)
                .post(authenticated, createPaymentMode); 

paymentModeRouter.route('/:id')
                .get(getPaymentMode)
                .put(updatePaymentMode)
                .patch(deletePaymentMode)
                .delete(destroyPaymentMode); 

paymentModeRouter.route('/:id/restore', restorePaymentMode); 


export default paymentModeRouter; 