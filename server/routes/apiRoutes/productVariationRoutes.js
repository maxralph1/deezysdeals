import express from 'express'; 
const productVariationRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getProductVariations, 
        createProductVariation, 
        getProductVariation, 
        updateProductVariation, 
        deleteProductVariation,
        restoreProductVariation, 
        destroyProductVariation
} from '../../controllers/productVariationController.js'; 


productVariationRouter.route('/')
                .get(getProductVariations)
                .post(authenticated, createProductVariation); 

productVariationRouter.route('/:id')
                .get(getProductVariation)
                .put(authenticated, updateProductVariation)
                .patch(authenticated, deleteProductVariation)
                .delete(authenticated, destroyProductVariation); 

productVariationRouter.patch('/:id/restore', authenticated, restoreProductVariation); 


export default productVariationRouter; 