import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categoryProductSchema = new Schema({ 
        added_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        category: { type: Schema.Types.ObjectId, ref: 'Category' }, 
        product: { type: Schema.Types.ObjectId, ref: 'Product' }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let CategoryProduct = mongoose.model("CategoryProduct", categoryProductSchema);
export default CategoryProduct; 