import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { route } from '@/routes'; 
import useAxios from '@/utils/useAxios.jsx'; 
import swal from 'sweetalert2'; 


export function useOrder(id = null) {
    const [errors, setErrors] = useState({}); 
    const [loading, setLoading] = useState(false); 
    const [data, setData] = useState({}); 
    const navigate = useNavigate(); 
    const axiosInstance = useAxios(); 


    useEffect(() => {
        if (id !== null) {
            const controller = new AbortController();
            getOrder(id, { signal: controller.signal })
            return () => controller.abort();
        }
    }, [id]);

    async function createOrder(order) {
        setLoading(true); 
        setErrors({}); 

        console.log(); 
        return axiosInstance.post('orders', order)
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

    async function getOrder(id, { signal } = {}) {
        setLoading(true); 

        return axiosInstance.get(`orders/${id}`, { signal })
            .then(response => setData(response?.data?.data))
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false));
    }

    async function updateOrder(order) {
        setLoading(true); 
        setErrors({}); 
        console.log(order);

        return axiosInstance.put(`orders/${id}`, order)
            .then(() => navigate(route('home.orders.index')))
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false));
    }

    async function deleteOrder(order) {
        return axiosInstance.patch(`orders/${order?._id}`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false)); 
    } 

    async function destroyOrder(order) {
        return axiosInstance.delete(`orders/${order?._id}`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false)); 
    } 

    async function restoreOrder(order) {
        return axiosInstance.patch(`orders/${order?._id}/restore`)
            .then(() => {})
            .catch(error => setErrors(error?.response))
            .finally(() => setLoading(false)); 
    } 


    return {
        order: { data, setData, errors, loading }, 
        getOrder, 
        createOrder, 
        updateOrder, 
        deleteOrder, 
        destroyOrder, 
        restoreOrder
    }
}