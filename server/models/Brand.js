import mongoose from 'mongoose'; 

const Schema = mongoose.Schema;

const brandSchema = new Schema({ 
        user: { type: Schema.Types.ObjectId, ref: 'User' }, 
        title: { 
            type: String, 
            maxLength: 245, 
            required: true 
        }, 
        slug: { type: String, required: true }, 
        description: { type: String, required: true }, 
        logo_path: { 
            public_id: { type: String, default: '' },
            url: { type: String, default: '' }
        }, 
        web_address: { type: String },
        facebook: { type: String },
        instagram: { type: String },
        twitter_x: { type: String}, 
        other_social: { type: String }, 
        other_social_handle: { type: String }, 
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
); 


let Brand = mongoose.model("Brand", brandSchema);
export default Brand; 