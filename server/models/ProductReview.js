import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const productReviewSchema = new Schema({ 
        added_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        product: { type: Schema.Types.ObjectId, ref: 'Product' }, 
        product_unit: { type: Schema.Types.ObjectId, ref: 'ProductUnit' }, 
        title: { type: String, required: true }, 
        content: { type: String, required: true }, 
        rating: { 
            type: String, 
            required: true, 
            enum: [1, 2, 3, 4, 5], 
            default: 5
        }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let ProductReview = mongoose.model("ProductReview", productReviewSchema);
export default ProductReview; 