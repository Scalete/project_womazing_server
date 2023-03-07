import mongoose from "mongoose";

const ContactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    tel: {
        type: String,
        required: true
    },

    messages: {
        type: [String]
    }
});

export default mongoose.model('ContactForm', ContactFormSchema);