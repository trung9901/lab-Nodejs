import mongoose, { Schema, ObjectId } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    // slug: {
    //     type: String,
    //     lowercase: true,
    //     unique: true,
    //     index: true
    // },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // image: {
    //     type: String,
    //     required: true
    // },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "category"
    }

}, { timestamps: true })
productSchema.index({ "$**": 'text' });
export default mongoose.model('Product', productSchema)