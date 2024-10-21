import { useState, useEffect } from 'react'; 
import useAxios from '@/utils/useAxios.jsx'; 


export function useOrderItems(page = 1, limit = 10) {
    const axiosInstance = useAxios(); 
    const [orderItems, setOrderItems] = useState([]); 

    useEffect(() => {
        if (page !== null) {
            const controller = new AbortController(); 
            getOrderItems({page, limit}, { signal: controller.signal }); 
            return () => { controller.abort() };
        }
    }, [page, limit]); 

    async function getOrderItems(page = 1, { signal } = {}) {
        return axiosInstance.get(`order-items?page=${page}&limit=${limit}`, { signal }) 
            .then(response => { 
                // console.log(response?.data); 
                setOrderItems(response?.data); 
            })
            .catch(error => console.log(error)); 
    } 

    return { orderItems, getOrderItems }; 
} 
