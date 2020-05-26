import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let ProductColorSchema = new Schema({

    cColorName: {
        type: String,
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const ProductColor = mongoose.model('ProductColor', ProductColorSchema);
export default ProductColor;
