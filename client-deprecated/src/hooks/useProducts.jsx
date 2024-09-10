import { useState, useEffect } from 'react'; 
import useAxios from '@/utils/useAxios.jsx'; 


export function useProducts(page = 1, limit = 10) {
    const axiosInstance = useAxios(); 
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        if (page !== null) {
            const controller = new AbortController(); 
            getProducts({page, limit}, { signal: controller.signal }); 
            return () => { controller.abort() };
        }
    }, [page, limit]); 

    async function getProducts(page, { signal } = {}) {
        return axiosInstance.get(`products?page=${page}&limit=${limit}`, { signal }) 
            .then(response => setProducts(response?.data))
            .catch(error => console.log(error));
    } 

    return { products, getProducts }; 
} 
