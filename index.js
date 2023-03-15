import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import productRoute from './routes/product.js';
import categoryRoute from './routes/category.js';
import formDataRoute from './routes/form-data.js';
import orderRoute from './routes/order.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productRoute);
app.use('/categories', categoryRoute);
app.use('/form-data', formDataRoute);
app.use('/order', orderRoute);
dotenv.config();

//Constants
const PORT = process.env.PORT || 3001;

async function serverStart() {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.URL)
        app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}

serverStart();