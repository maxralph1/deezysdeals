import origins from './allowedOrigins.js';


const corsOptions = {
    origin: (origin, callback) => {
        if (origins.indexOf(origin) == -1 || origin) {
            callback(null, true)
        } else {
            callback(new Error('CORS Restriction'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};


export default corsOptions;