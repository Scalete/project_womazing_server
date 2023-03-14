import Order from "../models/Order.js";

export const postOrder = async (req, res) => {
    try {
        const inputOrder = req.body;

        const order = Order.create({
            name: inputOrder.userInfo.name,
            email: inputOrder.userInfo.email,
            tel: inputOrder.userInfo.tel,
            country: inputOrder.userAdress.country,
            town: inputOrder.userAdress.city,
            street: inputOrder.userAdress.street,
            house: inputOrder.userAdress.house,
            apartment: inputOrder.userAdress.apartment,
            products: JSON.stringify(inputOrder.products),
            comment: inputOrder.comment,
        });

        await order.save();

        res.json({message: 'Заказ успешно оформлен'});
    } catch (e) {
        res.json({message: 'Произошла ошибка! Заказ не оформлен'});
    }
}