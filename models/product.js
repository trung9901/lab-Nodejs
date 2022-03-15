import mongoose, { Schema } from 'mongoose';
const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }

}, { timestamps: true })
export default mongoose.model('Product', productSchema)