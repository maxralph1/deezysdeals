import express from 'express'; 
const discountRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getDiscounts, 
        createDiscount, 
        getDiscount, 
        updateDiscount, 
        deleteDiscount,
        restoreDiscount, 
        destroyDiscount
} from '../../controllers/discountController.js'; 


discountRouter.route('/')
                .get(getDiscounts)
                .post(authenticated, createDiscount); 

discountRouter.route('/:id')
                .get(getDiscount)
                .put(authenticated, updateDiscount)
                .patch(authenticated, deleteDiscount)
                .delete(authenticated, destroyDiscount); 

discountRouter.route('/:id/restore', authenticated, restoreDiscount)


export default discountRouter; 