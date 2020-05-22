import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let ProductCategorySchema = new Schema({
    
    pcName: {type: String, required: false},
    pcDescription: {type: String, required: false},
    //- foreign key
    productId: [{ type: Schema.Types.ObjectId, ref: 'Product' }]

}, { 
    timestamps: { 
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    } 
})

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema)
export default ProductCategory;
