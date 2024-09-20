import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const productDescriptionSchema = new Schema({
        added_by: { type: Schema.Types.ObjectId, ref: 'User' },   
        product: { type: Schema.Types.ObjectId, ref: 'Product' }, 
        content: { type: String,  required: true }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let ProductDescription = mongoose.model("ProductDescription", productDescriptionSchema);
export default ProductDescription; 