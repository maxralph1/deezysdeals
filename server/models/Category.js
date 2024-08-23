import mongoose from 'mongoose'; 

const Schema = mongoose.Schema; 

const categorySchema = new Schema({ 
        id: { 
            type: String, 
            minLength: 1, 
            unique: true 
        },
        name: { 
            type: String, 
            minLength: 1, 
            unique: true 
        }
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
); 

let Category = mongoose.model('Category', categorySchema); 
export default Category; 