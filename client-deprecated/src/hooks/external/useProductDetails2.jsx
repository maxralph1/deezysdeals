import { useEffect, useState } from 'react'; 
import useAxiosAmazon1 from '@/utils/useAxiosAmazon1.jsx'; 


export function useProductDetails2(asin, country='US') {
    const axiosInstance3 = useAxiosAmazon1();
    const [productDetails, setProductDetails] = useState([]); 

    useEffect(() => {
        const controller = new AbortController(); 
        getProductDetails({ signal: controller.signal }); 
        return () => { controller.abort() }; 
    }, []); 

    async function getProductDetails({ signal } = {}) {
        return axiosInstance3.get(`/product-details/?asin=B00FLYWNYQ&country=${ country }`, { signal })
            .then(response => {
                console.log(response);
                setProductDetails(response?.data);
            })
            .catch(error => { console.log(error) });
    } 

    return { productDetails, getProductDetails }; 
}