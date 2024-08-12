import { set, connect } from 'mongoose';


const dbConnection = async () => {
    set('sanitizeFilter', true);
    set('strictQuery', false);

    try {
        await connect(process.env.DATABASE_URI, {
            // useUnifiedTopology: true,
            // useNewUrlParser: true
        })
    } catch (error) {
        console.error(error);
    }
}


export default dbConnection;