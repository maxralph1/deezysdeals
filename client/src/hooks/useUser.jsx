import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { route } from '@/routes'; 
import useAxios from '@/utils/useAxios.jsx'; 
import swal from 'sweetalert2'; 


export function useUser(username = null) {
    const [errors, setErrors] = useState({}); 
    const [loading, setLoading] = useState(false); 
    const [data, setData] = useState({}); 
    const navigate = useNavigate(); 
    const axiosInstance = useAxios(); 


    useEffect(() => {
        if (username !== null) {
            const controller = new AbortController();
            getUser(username, { signal: controller.signal })
            return () => controller.abort();
        }
    }, [username]);

    async function createUser(user) {
        setLoading(true); 
        setErrors({}); 

        console.log(); 
        return axiosInstance.post('users', user)
            .then(response => {
                setData(response?.data)
                console.log(response);
            })
            .catch(error => {
                setErrors(error?.response); 
                if (error?.response?.status == 409) {
                    swal.fire({
                        text: `${error?.response?.data?.message}`, 
                        color: '#900000', 
                        width: 325, 
                        position: 'top', 
                        showConfirmButton: false
                    });
                } else {
                    swal.fire({
                        text: `${error?.response?.status}: An error occured!`, 
                        color: '#900000', 
                        width: 325, 
                        position: 'top', 
                        showConfirmButton: false
                    });
                }
                console.log(error);
            })
            .finally(() => setLoading(false));
    } 

    async function getUser(username, { signal } = {}) {
        setLoading(true); 

        return axiosInstance.get(`users/${username}`, { signal })
            .then(response => setData(response?.data))
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false));
    }

    async function updateUser(user) {
        setLoading(true); 
        setErrors({}); 
        console.log(user);

        return axiosInstance.put(`users/${username}`, user)
            .then(() => navigate(route('home.users.index')))
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false));
    }

    async function deleteUser(user) {
        return axiosInstance.patch(`users/${user?.username}`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false)); 
    } 

    async function destroyUser(user) {
        return axiosInstance.delete(`users/${user?.username}`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false)); 
    } 

    async function restoreUser(user) {
        return axiosInstance.patch(`users/${user?.username}/restore`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false)); 
    } 


    return {
        retrievedUser: { data, setData, errors, loading }, 
        getUser, 
        createUser, 
        updateUser, 
        deleteUser, 
        destroyUser, 
        restoreUser
    }
}