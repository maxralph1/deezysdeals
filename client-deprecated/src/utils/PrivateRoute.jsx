import { useContext } from 'react'; 
import { Outlet, Navigate } from 'react-router-dom'; 
import AuthContext from '@/context/AuthContext.jsx'; 
import { route } from '@/routes'; 


const PrivateRoute = () => {
    let { user } = useContext(AuthContext); 

    return user ? <Outlet /> : <Navigate to={ route('sign-in') } />; 
}; 


export default PrivateRoute; 