import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/* Validators */
const validatePhoneNumber = (phone) => {
    const regex = /^\+?[1-9]\d{1,14}$/; // E.164 international phone number format
    return regex.test(phone);
};
/* end Validators */

const addressSchema = new Schema({
        user: { type: Schema.Types.ObjectId, ref: 'User' }, 
        default: { type: Boolean, default: false }, 
        full_name: { type: String, required: true }, 
        phone: { 
            type: String, 
            required: [true, 'Phone number is required'], 
            validate: {
                validator: validatePhoneNumber, 
                message: props => `${props.value} is not a valid phone number.`
            } 
        }, 
        address_line_1: { 
            type: String, 
            minLength: 1, 
            maxLength: 245, 
            required: true 
        }, 
        address_line_2: { type: String, maxLength: 245 }, 
        post_code: { type: String, maxLength: 15 }, 
        town_city: { 
            type: String, 
            minLength: 1, 
            maxLength: 45 
        }, 
        state_region: { 
            type: String, 
            minLength: 1, 
            maxLength: 45
        }, 
        country: { 
            type: String, 
            minLength: 1, 
            maxLength: 123, 
            default: 'Mauritius'
        }, 
        delivery_instructions: { type: String, maxLength: 245 }, 
        deleted_at: { type: String, default: null }
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let Address = mongoose.model('Address', addressSchema);
export default Address; 
