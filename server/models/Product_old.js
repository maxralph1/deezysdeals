import mongoose from 'mongoose'; 

const Schema = mongoose.Schema; 

const productSchema = new Schema({
        asin: {
            type: String, 
            minLength: 1
        }, 
        title: {
            type: String, 
            minLength: 1
        }, 
        subtitle: String, 
        price: Number, 
        currency: String, 
        country: String, 
        byline: String, 
        star_rating: Number, 
        number_of_ratings: Number, 
        url: String, 
        photo: String, 
        number_of_offers: Number, 
        availability: Number, 
        is_best_seller: Boolean, 
        is_amazon_choice: Boolean, 
        is_prime: Boolean, 
        climate_pledge_friendly: Boolean, 
        sales_volume: Number, 
        // 
        about_product: [String], 
        description: String, 
        // Product Information 
        package_dimension: String, 
        department: String, 
        date_first_available: Date, 
        asin: String, 
        best_seller_rank: String, 
        customer_reviews: String, 
        // Product Photos 
        product_photos: [String], 
        // Product Details .eg. fabric type, care instructions, origin
        product_details: {
            type: Map,
            of: String,
        }, 
        customers_say: String, 
        categories: [{
            type: Map, 
            of: String
        }], 
        product_variations: {
            type: Map,
            of: [{ 
                type: Map,
                of: String,
            }], 
        }, 
    }, 
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
    }
); 

let Product = mongoose.model('Product', productSchema); 
export default Product;