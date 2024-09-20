import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const productImageSchema = new Schema({
        added_by: { type: Schema.Types.ObjectId, ref: 'User' },   
        product: { type: Schema.Types.ObjectId, ref: 'Product' }, 
        // slug: { type: String, required: true }, 
        // description: { type: String, required: true }, 
        image_path: { 
            public_id: { type: String, default: '' },
            url: { type: String, default: '' }
        }, 
        is_product_default: { type: Boolean, default: false }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let ProductImage = mongoose.model("ProductImage", productImageSchema);
export default ProductImage; 