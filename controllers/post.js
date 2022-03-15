
import mongoose from "mongoose";
const Post = mongoose.model('Post', { name: String, title: String, image: String, content: String });

// API list sản phẩm
export const list = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// API thêm sản phẩm
export const create = async (req, res) => {
    try {
        const posts = await new Post(req.body).save()
        res.json(posts);

    } catch (error) {
        res.status(400).json({ message: "khong them duoc san pham" })
    }

}

// API xóa sản phẩm
export const remove = async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.id);
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }

}
export const update = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }

}