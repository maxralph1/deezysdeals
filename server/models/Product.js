import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const productSchema = new Schema({
        added_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        brand: { type: Schema.Types.ObjectId, ref: 'Brand' }, 
        discount: { type: Schema.Types.ObjectId, ref: 'Discount' }, 
        // category: { type: Schema.Types.ObjectId, ref: 'Category' }, 
        // sub_category: { type: Schema.Types.ObjectId, ref: 'SubCategory' }, 
        title: { type: String, required: true }, 
        slug: { type: String, required: true }, 
        description: { type: String }, 
        features: { type: String, default: '' }, 
        retail_price: { type: String, required: true }, 
        initial_retail_price: { type: String }, 
        currency: { type: String, default: 'usd' }, 
        images: [ String ], 
        purchased: { type: Boolean, default: false }, 
        order_count: { type: Number }, 
        proposed_delivery_start_date: { type: Date }, 
        proposed_delivery_destination_reach_date: { type: Date }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let Product = mongoose.model("Product", productSchema);
export default Product; 