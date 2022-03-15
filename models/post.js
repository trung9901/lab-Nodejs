import mongoose, { Schema } from 'mongoose';
const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})
export default mongoose.model('Post', productSchema)
