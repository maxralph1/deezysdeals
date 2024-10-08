import axios from 'axios'; 
import Constants from '@/utils/Constants.jsx';

const baseURL = `${ Constants.fakeStoreURL }`;


const useAxiosFakeStore = () => {
    const axiosFakeStoreInstance = axios.create({
        baseURL, 
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'multipart/form-data', 
        } 
    }); 

    return axiosFakeStoreInstance;
} 


export default useAxiosFakeStore; 