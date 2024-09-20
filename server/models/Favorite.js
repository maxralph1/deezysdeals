import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const favoriteSchema = new Schema({
        added_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
        product: { type: Schema.Types.ObjectId, ref: 'Product' },  
        deleted_at: { type: String, default: null }, 
        deleted_by: { type: Schema.Types.ObjectId, ref: 'User' }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


let Favorite = mongoose.model("Favorite", favoriteSchema);
export default Favorite; 