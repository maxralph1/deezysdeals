import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const orderSchema = new Schema({
        user: { type: Schema.Types.ObjectId,  ref: 'User' }, 
        order_items: [
            {
                name: { type: String, required: true },
                quantity: { type: Number, required: true },
                image: { type: String },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product'
                },
            },
        ], 
        delivery_mode: { type: Schema.Types.ObjectId, ref: 'DeliveryMode' }, 
        payment_mode: { type: Schema.Types.ObjectId, ref: 'PaymentMode' }, 
        order_key: { type: String, required: true },  
        billing_status: { 
            type: String, 
            required: true, 
            enum: ['not-paid', 'pay-on-delivery', 'paid-with-cash', 'paid-with-card', 'paid-with-paypal'], 
            default: 'not-paid'
        },  
        total_to_be_paid: { type: Number }, 
        paid: { type: Boolean, default: false }, 
        total_paid: { type: Number }, 
        total_balance: { type: Number }, 
        proposed_delivery_start_date: { type: Date },
        proposed_delivery_destination_reach_date: { type: Date },
        full_name: { 
            type: String, 
            required: true 
        }, 
        email: { 
            type: String,
            required: [true, 'Email address is required'], 
            unique: true,
            validate: {
                validator: function(email) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(email);
                },
                message: props => `${props.value} is not a valid email address!`
            }
        }, 
        phone: { 
            type: String, 
            required: [true, 'Phone number is required'], 
            unique: true, 
            validate: {
                validator: function(phone) {
                    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
                    return phoneRegex.test(phone);
                }, 
                message: props => `${props.value} is not a valid phone number.`
            } 
        }, 
        address_line_1: { 
            type: String, 
            minLength: 3, 
            maxLength: 245,
            required: true 
        }, 
        address_line_2: { 
            type: String, 
            minLength: 3, 
            maxLength: 245,
            required: true 
        }, 
        post_code: { 
            type: String, 
            minLength: 3, 
            maxLength: 15
        }, 
        town_city: { 
            type: String, 
            minLength: 3, 
            maxLength: 45
        }, 
        state_region: { 
            type: String, 
            minLength: 3, 
            maxLength: 45
        }, 
        country: { 
            type: String, 
            minLength: 3, 
            maxLength: 123, 
            default: 'Mauritius'
        }, 
        delivery_instructions: { 
            type: String, 
            minLength: 3, 
            maxLength: 245
        }, 
        delivered_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let Order = mongoose.model("Order", orderSchema);
export default Order; 