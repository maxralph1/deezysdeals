import { useState, useEffect } from 'react'; 
import useAxios from '@/utils/useAxios.jsx'; 


export function useUsers(role = '', page = 1, limit = 10) {
    const axiosInstance = useAxios(); 
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        if (page !== null) {
            const controller = new AbortController(); 
            getUsers({role, page}, { signal: controller.signal }); 
            return () => { controller.abort() };
        }
    }, [page, limit]); 

    async function getUsers(role = '', page = 1, { signal } = {}) {
        return axiosInstance.get(`users?page=${page}&limit=${limit}&role=${role}`, { signal }) 
            .then(response => setUsers(response?.data))
            .catch(error => console.log(error));
    } 

    return { users, getUsers }; 
} 
