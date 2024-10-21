import express from 'express'; 
const orderRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getOrders, 
        createOrder, 
        captureOrder, 
        getOrder, 
        updateOrder, 
        deleteOrder, 
        restoreOrder, 
        destroyOrder
} from '../../controllers/orderController.js'; 


orderRouter.use(authenticated); 

orderRouter.route('/')
                .get(getOrders)
                .post(createOrder); 

orderRouter.route('/:id')
                .get(getOrder)
                .put(updateOrder)
                .patch(deleteOrder)
                .delete(destroyOrder); 

orderRouter.patch('/:id/restore', restoreOrder); 
orderRouter.post('/:id/capture', captureOrder); 


export default orderRouter; 