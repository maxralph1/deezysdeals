import express from 'express'; 
const productImageRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getProductImages, 
        createProductImage, 
        getProductImage, 
        updateProductImage, 
        deleteProductImage,
        restoreProductImage, 
        destroyProductImage
} from '../../controllers/productImageController.js'; 


productImageRouter.route('/')
                .get(getProductImages)
                .post(authenticated, createProductImage); 

productImageRouter.route('/:id')
                .get(getProductImage)
                .put(updateProductImage)
                .patch(deleteProductImage)
                .delete(destroyProductImage); 

productImageRouter.patch('/:id/restore', authenticated, restoreProductImage); 


export default productImageRouter; 