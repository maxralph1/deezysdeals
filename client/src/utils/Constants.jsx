const client = import.meta.env.VITE_CLIENT_URL;
const server = import.meta.env.VITE_SERVER_URL; 
const paypalClientID = import.meta.env.VITE_PAYPAL_CLIENT_ID; 


const Constants = {
    clientURL: client, 
    serverURL: server, 
    amazonFirstURL: 'https://parazun-amazon-data.p.rapidapi.com',
    // amazon1URL: 'https://parazun-amazon-data.p.rapidapi.com/product/'
    amazonSecondURL: 'https://real-time-amazon-data.p.rapidapi.com',
    // amazon2URL: 'https://real-time-amazon-data.p.rapidapi.com/product/', 
    fakeStoreURL: 'https://fakestoreapi.com', 
    paypalClientID
}; 


export default Constants; 