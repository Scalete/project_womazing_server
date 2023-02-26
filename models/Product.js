import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true
    },

    price: {
      type: Number,
      required: true
    },

    discount: {
      type: Number,
      required: false
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});

export default mongoose.model('Product', ProductSchema);