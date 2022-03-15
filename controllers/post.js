
import mongoose from "mongoose";
// 1 Khởi tạo model
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
// API tim sản phẩm
export const read = async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const post = await Post.findOne(filter);
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
    const condition = { _id: req.params.id }
    try {
        const post = await Post.findOneAndDelete(condition);
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }

}
// API cập nhật sản phẩm
export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const option = { new: true };
    try {
        const post = await Post.findOneAndUpdate(condition, doc, option);
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }

}