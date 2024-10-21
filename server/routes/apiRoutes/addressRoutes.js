import express from 'express'; 
const addressRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getAddresses, 
        createAddress, 
        getAddress, 
        updateAddress, 
        makeDefaultAddress, 
        deleteAddress, 
        restoreAddress, 
        destroyAddress
} from '../../controllers/addressController.js'; 


addressRouter.use(authenticated); 

addressRouter.route('/')
                .get(getAddresses)
                .post(createAddress); 

addressRouter.route('/:id')
                .get(getAddress)
                .put(updateAddress)
                .patch(deleteAddress)
                .delete(destroyAddress); 

addressRouter.patch('/:id/make-default', makeDefaultAddress); 
addressRouter.patch('/:id/restore', restoreAddress); 


export default addressRouter;