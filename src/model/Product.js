import mongoose from 'mongoose';
import moment from 'moment';

let Schema = mongoose.Schema;
let ProductSchema = new Schema({
    
    pName: {
        type: String, 
        required: true,
        index: true //- should not be place index here
    },
    pCode: {
        type: String, 
        required: true,
        index: true
    },
    pPrice: {
        type: Number, 
        required: true
    },

    pBranch: {
        type: String, 
        required: true,
        index: true
    },

    //- 1 product will have multiple color
    pColor: {
        type: String, 
        required: true,
        index: true,
        enum: ['Pink', 'Yellow', 'White', 'Black']
    }

}, { 
    timestamps: { 
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    } 
});

const Product = mongoose.model('Product', ProductSchema)
export default Product;
