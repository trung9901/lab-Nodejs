import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose'
// router
import productRoute from '../routes/product';
import postRouter from '../routes/post'
import categoryRoute from '../routes/category';
import authRoute from '../routes/auth'
import UsersRoute from '../routes/user';
const app = express();
// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())
//route
app.use("/api", postRouter);
app.use("/api", productRoute);
app.use("/api", categoryRoute);
app.use("/api", authRoute);
app.use('/api', UsersRoute)
//connectdatabase
mongoose.connect('mongodb://localhost:27017/nodejs')
    .then(() => console.log("connection db succeeded"))
    .catch((error) => console.log(error))
//connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})