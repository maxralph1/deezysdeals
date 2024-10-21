import express from 'express'; 
const productVariationValueRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getProductVariationValues, 
        createProductVariationValue, 
        getProductVariationValue, 
        updateProductVariationValue, 
        deleteProductVariationValue,
        restoreProductVariationValue, 
        destroyProductVariationValue
} from '../../controllers/productVariationValueController.js'; 


productVariationValueRouter.route('/')
                .get(getProductVariationValues)
                .post(authenticated, createProductVariationValue); 

productVariationValueRouter.route('/:id')
                .get(getProductVariationValue)
                .put(authenticated, updateProductVariationValue)
                .patch(authenticated, deleteProductVariationValue)
                .delete(authenticated, destroyProductVariationValue); 

productVariationValueRouter.route('/:id/restore', authenticated, restoreProductVariationValue)


export default productVariationValueRouter; 