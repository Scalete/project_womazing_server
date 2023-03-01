import ContactForm from "../models/ContactForm.js";

export const addContactFormData = async (req, res) => {
    try {
        const inputFormData = req.body;

        const foundEmail = await ContactForm.find({email: inputFormData.email});
        const foundTel = await ContactForm.find({tel: inputFormData.tel});

        if(foundEmail.length || foundTel.length) {
            res.json({message: 'Извините, но ваш email или телефон уже есть у нас. Мы с вами свяжемся :)'});
            return;
        }

        const formData = new ContactForm(inputFormData);
        await formData.save();

        res.json({message: 'Отлично! Мы скоро вам перезвоним.'});
    } catch (e) {
        res.json({message: 'Произошла ошибка! Попробуйте еще раз'});
    }
}