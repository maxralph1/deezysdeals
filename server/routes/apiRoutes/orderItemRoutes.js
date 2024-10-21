import express from 'express'; 
const orderItemRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getOrderItems, 
        createOrderItem, 
        getOrderItem, 
        updateOrderItem, 
        deleteOrderItem, 
        restoreOrderItem, 
        destroyOrderItem
} from '../../controllers/orderItemController.js'; 


orderItemRouter.use(authenticated); 

orderItemRouter.route('/')
                .get(getOrderItems)
                .post(createOrderItem); 

orderItemRouter.route('/:id')
                .get(getOrderItem)
                .put(updateOrderItem)
                .patch(deleteOrderItem)
                .delete(destroyOrderItem); 

orderItemRouter.patch('/:id/restore', restoreOrderItem);


export default orderItemRouter; 