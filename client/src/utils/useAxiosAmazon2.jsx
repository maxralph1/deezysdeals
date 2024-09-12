import axios from 'axios'; 
import Constants from '@/utils/Constants.jsx';

const baseURL = `${ Constants.amazon2URL }`;


const useAxiosAmazon1 = () => {
    const axiosInstance3 = axios.create({
        baseURL, 
        headers: { 
            'Accept': 'application/json', 
            'x-rapidapi-ua': 'RapidAPI-Playground', 
            'x-rapidapi-key': 'b939341614msh802bcb36f9937edp14b54bjsn407922f0dbc2', 
            // 'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
            'x-rapidapi-host': baseURL
        } 
    }); 

    return axiosInstance3;
} 


export default useAxiosAmazon1; 