import ContactForm from "../models/ContactForm.js";

export const addContactFormData = async (req, res) => {
    try {
        const inputFormData = req.body;

        const foundContactForm = await ContactForm.findOne({tel: inputFormData.tel});

        if(foundContactForm && inputFormData.message) {
            foundContactForm.messages.push(inputFormData.message.trim());
            await foundContactForm.save();
            res.json({message: 'Ваше сообщение было отправлено'});
            return;
        } else if (foundContactForm && !inputFormData.messages) {
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