import { useEffect, useState } from 'react'; 
import useAxiosFakeStore from '@/utils/useAxiosFakeStore.jsx'; 


export function useCategoryExt(id) {
    const axiosFakeStoreInstance = useAxiosFakeStore();
    const [categoryExt, setCategoryExt] = useState([]); 

    useEffect(() => {
        const controller = new AbortController(); 
        getCategoryExt({ signal: controller.signal }); 
        return () => { controller.abort() }; 
    }, []); 

    async function getCategoryExt({ signal } = {}) {
        return axiosFakeStoreInstance.get(`/products/category/${id}`, { signal })
            .then(response => {
                console.log(response);
                setCategoryExt(response?.data);
            })
            .catch(error => { console.log(error) });
    } 

    return { categoryExt, getCategoryExt }; 
}