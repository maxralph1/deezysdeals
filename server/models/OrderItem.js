import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const orderItemSchema = new Schema({
        user: { type: Schema.Types.ObjectId, ref: 'User' }, 
        product: { type: Schema.Types.ObjectId, ref: 'Product' }, 
        order: { type: Schema.Types.ObjectId, ref: 'Order' }, 
        quantity: { type: Number }, 
        price: { type: Number }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let OrderItem = mongoose.model("OrderItem", orderItemSchema);
export default OrderItem; 