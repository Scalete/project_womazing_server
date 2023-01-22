import Product from '../models/Product.js';

export const addProduct = async (req, res) => {
    try {
        const {imgUrl, title, price, discount} = req.body;
        const newProduct = new Product({
            imgUrl, title, price, discount
        });

        await newProduct.save();

        res.json({
            newProduct,
           message: 'Добавление продукта успешно'
        });

    } catch (e) {
        res.json({message: 'Ошибка при добавлении продукта'});
    }
}

export const getAllProducts = async (req, res) => {
    try {

        const products = await Product.find();

        res.json({
            products,
            message: 'Все продукты получены'
        });

    } catch (e) {
        res.json({message: 'Ошибка при получении продуктов'});
    }
}