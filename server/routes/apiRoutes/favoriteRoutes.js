import express from 'express'; 
const favoriteRouter = express.Router();
import authenticated from '../../middleware/authenticated.js'; 
import roles from '../../config/allowedRoles.js'; 
import checkRoles from '../../middleware/checkRoles.js'; 
import { getFavorites, 
        createFavorite, 
        getFavorite,  
        deleteFavorite
} from '../../controllers/favoriteController.js'; 


favoriteRouter.get('/', getFavorites); 
favoriteRouter.post('/product/:product', authenticated, createFavorite); 

favoriteRouter.route('/:id')
                .get(getFavorite)
                .delete(deleteFavorite); 


export default favoriteRouter; 