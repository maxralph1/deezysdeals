const client = import.meta.env.VITE_API_CLIENT_URL;
const server = import.meta.env.VITE_API_SERVER_URL;


const Constants = {
    // clientURL: 'http://127.0.0.1:5174', 
    // serverURL: 'http://127.0.0.1:5001', 
    clientURL: client, 
    serverURL: server, 
    amazonFirstURL: 'https://parazun-amazon-data.p.rapidapi.com',
    // amazon1URL: 'https://parazun-amazon-data.p.rapidapi.com/product/'
    amazonSecondURL: 'https://real-time-amazon-data.p.rapidapi.com',
    // amazon2URL: 'https://real-time-amazon-data.p.rapidapi.com/product/'
}; 


export default Constants; 