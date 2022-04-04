import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title: {
        required: true,
        minlength: 5,
        type: String,
        unique: true
    },
    img: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    }
}, { timestamps: true })

export default mongoose.model('post', postSchema)