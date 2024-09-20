import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const productVariationValueSchema = new Schema({ 
        added_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        product: { type: Schema.Types.ObjectId, ref: 'Product' }, 
        product_unit: { type: Schema.Types.ObjectId, ref: 'ProductUnit' }, 
        product_variation: { type: Schema.Types.ObjectId, ref: 'ProductVariation' }, 
        value: { type: String, required: true }, 
        slug: { type: String,  required: true }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let ProductVariationValue = mongoose.model("ProductVariationValue", productVariationValueSchema);
export default ProductVariationValue; 