import { useEffect, useState } from 'react'; 
import useAxiosFakeStore from '@/utils/useAxiosFakeStore.jsx'; 


export function useProductExt(id) {
    const axiosFakeStoreInstance = useAxiosFakeStore();
    const [productExt, setProductExt] = useState({}); 

    useEffect(() => {
        const controller = new AbortController(); 
        getProductExt({ signal: controller.signal }); 
        return () => { controller.abort() }; 
    }, []); 

    async function getProductExt({ signal } = {}) {
        return axiosFakeStoreInstance.get(`/products/${id}`, { signal })
            .then(response => {
                console.log(response);
                setProductExt(response?.data);
            })
            .catch(error => { console.log(error) });
    } 

    return { productExt, getProductExt }; 
}