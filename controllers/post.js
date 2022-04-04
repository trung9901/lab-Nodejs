import Post from "../models/post";
export const list = async (req, res) => {
    try {
        const ListPost = await Post.find();
        res.json(ListPost);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}
// thêm sản phẩm
export const post = async (req, res) => {
    try {
        const post = await new Post(req.body).save();
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }

}
//update 
export const update = async (req, res) => {
    try {
        const Updatepost = await Post.findByIdAndUpdate(req.params.id, req.body)
        res.json(Updatepost);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}
//
export const read = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}
export const remove = async (req, res) => {
    try {
        const removePost = await Post.findByIdAndDelete(req.params.id)
        res.json(removePost);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}