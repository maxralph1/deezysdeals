import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const deliveryModeSchema = Schema({
        title: { type: String, required: true }, 
        description: { type: String, required: true }, 
        price: { type: Number, required: true }, 
        unit_of_measurement: { type: String, required: true }, 
        method: { type: String, required: true }, 
        timeframe: { type: String, required: true }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
); 


let DeliveryMode = mongoose.model("DeliveryMode", deliveryModeSchema);
export default DeliveryMode; 