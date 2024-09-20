import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const discountSchema = new Schema({
        added_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        title: { type: String, required: true }, 
        slug: { type: String, required: true }, 
        code: { type: String, required: true }, 
        description: { type: String, required: true }, 
        value: { type: Number, required: true }, 
        value_unit: { 
            type: String, 
            required: true, 
            enum: ['percentage', 'usd'], 
            default: 'percentage' 
        }, 
        usable_once: { type: Boolean, default: false }, 
        used_at: { type: String, default: null },
        used_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        updated_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let Discount = mongoose.model('Discount', discountSchema);
export default Discount; 