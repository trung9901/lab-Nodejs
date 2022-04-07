import mongoose, { Schema, ObjectId } from 'mongoose';
const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,

        unique: true
    },
    price: {
        type: Number,

    },
    // category: {
    //     type: ObjectId,
    //     ref: "Category"
    // }

}, { timestamps: true })
productSchema.index({ "$**": 'text' });
export default mongoose.model('Product', productSchema)