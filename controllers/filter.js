import Category from "../models/Category.js";
import Product from "../models/Product.js";

export const onFilter = async (req, res) => {
    try {
        const categoryName = req.query.name;
        let foundProducts;

        const foundCategory = await Category.find({name: categoryName});

        if (foundCategory.length !== 0) {
            foundProducts = await Product.find({category: foundCategory.pop()._id}).populate('category');
        } else {
            foundProducts = await Product.find();
        }

        //код пагинации

        res.json({
            message: 'Успешная смена категории',
            foundProducts
        });

    } catch (e) {
        res.json({message: 'Ошибка при смене категорий'});
    }
}