import { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode'; 
import dayjs from 'dayjs'; 
import AuthContext from '@/context/AuthContext.jsx'; 
import { route } from '@/routes'; 
import axios from 'axios'; 
import Constants from '@/utils/Constants.jsx'; 

const baseURL = `${ Constants?.serverURL }/api/v1`; 


const useAxios = () => {
    const navigate = useNavigate(); 
    const { authTokens, setUser, setAuthTokens } = useContext(AuthContext); 

    const axiosInstance = axios.create({
        baseURL, 
        headers: {
            'Authorization': `Bearer ${ authTokens?.access }`, 
            'Content-Type': 'multipart/form-data', 
        }
    }); 

    axiosInstance?.interceptors?.request?.use(async req => {
        const user = jwtDecode(authTokens?.access); 
        const isExpired = dayjs.unix(user?.exp).diff(dayjs()) < 1; 

        if (!isExpired) return req;

        const response = await axios.post(`${ baseURL }/auth/refresh-token`, {
            headers: {
                'Authorization': `Bearer ${ authTokens?.access }`, 
                'Content-Type': 'multipart/form-data', 
            }
        }); 

        localStorage?.setItem('deezysdeals_authTokens', JSON?.stringify(response?.data)); 

        setAuthTokens(response?.data); 
        setUser(jwtDecode(response?.data?.access)); 

        req.headers.Authorization = `Bearer ${response?.data?.access}`; 
        req;
    }); 

    axiosInstance?.interceptors?.response?.use(
        response => response, 
        error => {
            if (error?.response?.status === 401) navigate(route('sign-in')); 
            return Promise.reject(error);
        }
    ) 
    
    return axiosInstance;
} 


export default useAxios; 