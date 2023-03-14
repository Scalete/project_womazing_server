import mongoose from "mongoose";
import Product from "./Product.js";

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    tel: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    town: {
        type: String,
        required: true,
    },

    street: {
        type: String,
        required: true,
    },

    house: {
        type: String,
        required: true,
    },

    apartment: {
        type: String,
        required: true,
    },

    products: {
        type: String,
        required: true,
    },

    comment: {
        type: String
    }
});

export default mongoose.model('Order', OrderSchema);