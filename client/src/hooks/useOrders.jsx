import { useState, useEffect } from 'react'; 
import useAxios from '@/utils/useAxios.jsx'; 


export function useOrders(page = 1, limit = 10) {
    const axiosInstance = useAxios(); 
    const [orders, setOrders] = useState([]); 

    useEffect(() => {
        if (page !== null) {
            const controller = new AbortController(); 
            getOrders({page, limit}, { signal: controller.signal }); 
            return () => { controller.abort() };
        }
    }, [page, limit]); 

    async function getOrders(page, { signal } = {}) {
        return axiosInstance.get(`orders?page=${page}&limit=${limit}`, { signal }) 
            .then(response => setOrders(response?.data))
            .catch(error => console.log(error));
    } 

    return { orders, getOrders }; 
} 
