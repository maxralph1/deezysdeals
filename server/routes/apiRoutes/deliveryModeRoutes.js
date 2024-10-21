import express from 'express'; 
const deliveryModeRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getDeliveryModes, 
        createDeliveryMode, 
        getDeliveryMode, 
        updateDeliveryMode, 
        deleteDeliveryMode, 
        restoreDeliveryMode, 
        destroyDeliveryMode
} from '../../controllers/deliveryModeController.js'; 


deliveryModeRouter.route('/')
                .get(getDeliveryModes)
                .post(authenticated, createDeliveryMode); 

deliveryModeRouter.route('/:id')
                .get(getDeliveryMode)
                .put(authenticated, updateDeliveryMode)
                .patch(authenticated, deleteDeliveryMode)
                .delete(authenticated, destroyDeliveryMode); 

deliveryModeRouter.route('/:id/restore', authenticated, restoreDeliveryMode);


export default deliveryModeRouter; 