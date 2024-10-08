import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { route } from '@/routes'; 
import useAxios from '@/utils/useAxios.jsx'; 
import swal from 'sweetalert2'; 


export function useAddress(id = null) {
    const [errors, setErrors] = useState({}); 
    const [loading, setLoading] = useState(false); 
    const [data, setData] = useState({}); 
    const navigate = useNavigate(); 
    const axiosInstance = useAxios(); 


    useEffect(() => {
        if (id !== null) {
            const controller = new AbortController();
            getAddress(id, { signal: controller.signal })
            return () => controller.abort();
        }
    }, [id]);

    async function createAddress(address) {
        setLoading(true); 
        setErrors({}); 

        console.log(); 
        return axiosInstance.post('addresses', address)
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

    async function getAddress(id, { signal } = {}) {
        setLoading(true); 

        return axiosInstance.get(`addresses/${id}`, { signal })
            .then(response => setData(response?.data?.data))
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false));
    }

    async function updateAddress(address) {
        setLoading(true); 
        setErrors({}); 
        console.log(address);

        return axiosInstance.put(`addresses/${id}`, address)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false));
    }

    async function makeDefaultAddress(address) {
        setLoading(true); 
        setErrors({}); 
        console.log(address);

        return axiosInstance.patch(`addresses/${address?._id}/make-default`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false));
    }

    async function deleteAddress(address) {
        return axiosInstance.patch(`addresses/${address?._id}`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false)); 
    } 

    async function destroyAddress(address) {
        return axiosInstance.delete(`addresses/${address?._id}`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false)); 
    } 

    async function restoreAddress(address) {
        return axiosInstance.patch(`addresses/${address?._id}/restore`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false)); 
    } 


    return {
        address: { data, setData, errors, loading }, 
        getAddress, 
        createAddress, 
        updateAddress, 
        makeDefaultAddress, 
        deleteAddress, 
        destroyAddress, 
        restoreAddress
    }
}