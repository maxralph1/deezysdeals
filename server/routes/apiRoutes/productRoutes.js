import express from 'express'; 
const productRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getProducts, 
        createProduct, 
        getProduct, 
        updateProduct, 
        deleteProduct,
        restoreProduct, 
        destroyProduct
} from '../../controllers/productController.js'; 


productRouter.route('/')
                .get(getProducts)
                .post(authenticated, createProduct); 

productRouter.route('/:id')
                .get(getProduct)
                .put(authenticated, updateProduct)
                .patch(authenticated, deleteProduct)
                .delete(authenticated, destroyProduct); 

productRouter.patch('/:id/restore', authenticated, restoreProduct); 


export default productRouter; 