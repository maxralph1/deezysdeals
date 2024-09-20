import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const productVariationSchema = new Schema({ 
        added_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        product: { type: Schema.Types.ObjectId, ref: 'Product' }, 
        title: { type: String, required: true }, 
        slug: { type: String, required: true }, 
        description: { type: String, required: true }, 
        retail_price: { type: String, required: true }, 
        initial_retail_price: { type: String }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let ProductVariation = mongoose.model("ProductVariation", productVariationSchema);
export default ProductVariation; 