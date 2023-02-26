import Category from "../models/Category.js";
import Product from "../models/Product.js";

export const onChangeCategory = async (req, res) => {
    try {
        const categoryName = req.body;
        let foundProductsByCategory;

        const foundCategory = await Category.find(categoryName);

        if (foundCategory.length !== 0) {
            foundProductsByCategory = await Product.find({category: foundCategory.pop()._id}).populate('category');
        } else {
            foundProductsByCategory = await Product.find();
        }

        res.json({
            message: 'Успешная смена категории',
            foundProductsByCategory
        });

    } catch (e) {
        res.json({message: 'Ошибка при смене категорий'});
    }
}

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        res.json({
            categories,
            message: 'Все категории получены'
        });

    } catch (e) {
        res.json({message: 'Ошибка получения категорий'});
    }
}