import bcrypt from 'bcrypt'; 
import mongoose from 'mongoose'; 

const Schema = mongoose.Schema; 

const userSchema = new Schema({
        username: {
            type: String, 
            minLength: 3, 
            maxLength: 15, 
            unique: [true, 'Username is already taken'], 
            required: true
        }, 
        first_name: { 
            type: String, 
            required: true 
        }, 
        other_names: String,
        last_name: { 
            type: String, 
            required: true 
        }, 
        user_image_path: { 
            public_id: { type: String, default: '' },
            url: { type: String, default: '' }
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
            // required: [true, 'Phone number is required'], 
            unique: true, 
            sparse: true, 
            validate: {
                validator: function(phone) {
                    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
                    return phoneRegex.test(phone);
                }, 
                message: props => `${props.value} is not a valid phone number.`
            } 
        }, 
        password: { 
            type: String, 
            required: true 
        }, 
        role: { 
            type: String, 
            required: true, 
            enum: ['admin', 'dispatcher', 'enterprise', 'individual'], 
            default: 'individual' 
        }, 
        email_verify_token: String, 
        email_verified: Date, 
        auth_token: String, 
        password_reset_token: String, 
        verified: { type: Boolean, default: false }, 
        verified_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        online: { type: Boolean, default: false }, 
        show_online_status: { type: Boolean, default: true }, 
        last_time_active: String, 
        active: { type: Boolean, default: true }, 
        total_amount_spent_on_orders: { type: Number }, 
        deleted_at: { type: String, default: null } 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
); 

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


let User = mongoose.model("User", userSchema);
export default User; 