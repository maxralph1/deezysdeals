import { useEffect, useState } from 'react'; 
import useAxiosFakeStore from '@/utils/useAxiosFakeStore.jsx'; 


export function useCategoriesExt() {
    const axiosFakeStoreInstance = useAxiosFakeStore();
    const [categoriesExt, setCategoriesExt] = useState([]); 

    useEffect(() => {
        const controller = new AbortController(); 
        getCategoriesExt({ signal: controller.signal }); 
        return () => { controller.abort() }; 
    }, []); 

    async function getCategoriesExt({ signal } = {}) {
        return axiosFakeStoreInstance.get(`/products/categories`, { signal })
            .then(response => {
                console.log(response);
                setCategoriesExt(response?.data);
            })
            .catch(error => { console.log(error) });
    } 

    return { categoriesExt, getCategoriesExt }; 
}