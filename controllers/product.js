// const products = [
//     { id: 1, name: "Product A" }, // item
//     { id: 2, name: "Product B" } // item
// ];
import mongoose from "mongoose";
const Product = mongoose.model('Product', { name: String });

// API list sản phẩm
export const list = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const read = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
}

// API thêm sản phẩm
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save()
        res.json(product);

    } catch (error) {
        res.status(400).json({ message: "khong them duoc san pham" })
    }

}

// API xóa sản phẩm
export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
}
export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
}