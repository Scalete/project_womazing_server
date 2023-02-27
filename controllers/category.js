import Category from "../models/Category.js";

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