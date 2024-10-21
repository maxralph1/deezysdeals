import express from 'express'; 
const brandRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getBrands, 
        createBrand, 
        getBrand, 
        updateBrand, 
        deleteBrand,
        restoreBrand, 
        destroyBrand
} from '../../controllers/brandController.js'; 


brandRouter.route('/')
                .get(getBrands)
                .post(authenticated, createBrand); 

brandRouter.route('/:id')
                .get(getBrand)
                .put(authenticated, updateBrand)
                .patch(authenticated, deleteBrand)
                .delete(authenticated, destroyBrand); 

brandRouter.patch('/:id/restore', authenticated, restoreBrand);


export default brandRouter; 