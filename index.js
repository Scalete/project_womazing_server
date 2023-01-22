import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import productRoute from './routes/product.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productRoute);
dotenv.config();

//Constants
const PORT = process.env.PORT || 3001;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

async function serverStart() {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.7kuahqn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        )
        app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}

serverStart();