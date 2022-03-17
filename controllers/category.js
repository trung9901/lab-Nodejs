import Category from '../models/category';
import Product from '../models/product';

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save()
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}

export const read = async ( req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const products = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {
        
    }
}

export const remove = async (req, res) => {
    const conditions = { _id: req.params.id }
    try {
        const category = await Category.findOneAndDelete(conditions);
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
   
}
export const update = async (req, res) => {
    const conditions = { _id: req.params.id }
    const doc = req.body
    const options = { new: true }
    try {
        const category = await Category.findByIdAndUpdate(conditions, doc, options);
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }

}