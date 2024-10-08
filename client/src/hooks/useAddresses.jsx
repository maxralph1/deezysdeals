import { useState, useEffect } from 'react'; 
import useAxios from '@/utils/useAxios.jsx'; 


export function useAddresses(page = 1, limit = 10) {
    const axiosInstance = useAxios(); 
    const [addresses, setAddresses] = useState([]); 

    useEffect(() => {
        if (page !== null) {
            const controller = new AbortController(); 
            getAddresses({page, limit}, { signal: controller.signal }); 
            return () => { controller.abort() };
        }
    }, [page, limit]); 

    async function getAddresses(page, { signal } = {}) {
        return axiosInstance.get(`addresses?page=${page}&limit=${limit}`, { signal }) 
            .then(response => setAddresses(response?.data))
            .catch(error => console.log(error));
    } 

    return { addresses, getAddresses }; 
} 
