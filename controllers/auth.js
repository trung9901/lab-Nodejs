import User from "../models/user"

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const exitsUser = await User.findOne({ email }).exec()
        if (exitsUser) {
            res.json({
                message: "Email đã tồn tại, vui lòng đăng ký email khác"
            })
        }
        const user = await new User(name, email, password).save()
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.json(400).json({
            message: "không tạo được tài khoản"
        })
    }
}
export const signin = async (req, res) => {
    try {
        const user = await User.findOne({ email }).exec()
        if (!user) {
            res.status(400).json({
                message: "email không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "sai mật khẩu"
            })
        }
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {

    }
}