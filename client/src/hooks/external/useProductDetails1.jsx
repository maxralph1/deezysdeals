import { useEffect, useState } from 'react'; 
import useAxiosAmazon1 from '@/utils/useAxiosAmazon1.jsx'; 
import axios from 'axios'; 


export function useProductDetails1(asin, region='US') {
    const axiosInstance = useAxiosAmazon1();
    const [productDetails, setProductDetails] = useState([]); 

    useEffect(() => {
        const controller = new AbortController(); 
        getProductDetails({ signal: controller.signal }); 
        return () => { controller.abort() }; 
    }, []); 

    async function getProductDetails({ signal } = {}) {
        // return axiosInstance.get(`/product/?asin=1668048043&region=${ region }`, { signal })
        return axios.get(`/product`, { signal })
            .then(response => {
                console.log(response);
                setProductDetails(response?.data);
            })
            .catch(error => { console.log(error) });
    } 

    return { productDetails, getProductDetails }; 
}