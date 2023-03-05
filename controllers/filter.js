import Category from "../models/Category.js";
import Product from "../models/Product.js";
import {PAGINATION_LIMIT, LIMITED_PRODUCTS} from "../utils/Constants.js";

const onLoadCategory = async (inputCategory) => {

    const foundCategory = await Category.find(inputCategory);
    let categorySortProducts;

    if (foundCategory.length !== 0) {
        categorySortProducts = await Product.find({category: foundCategory.pop()._id}).populate('category');
    } else {
        categorySortProducts = await Product.find();
    }

    return categorySortProducts;
}

const onLoadPagination = (products, page) => {
    const offset = (page - 1) * PAGINATION_LIMIT;
    const paginatedItems = products.slice(offset, offset + PAGINATION_LIMIT);
    const totalPages = Math.ceil(products.length / PAGINATION_LIMIT);

    return {
        page,
        totalPages,
        paginatedItems
    }
}

export const onFilter = async (req, res) => {
    try {
        const categoryName = req.query.name;
        const page = req.query.page || 1;
        let foundProducts = await onLoadCategory({name: categoryName});
        foundProducts = onLoadPagination(foundProducts, page);

        res.json({
            message: 'Успешная смена категории',
            foundProducts
        });

    } catch (e) {
        res.json({message: 'Ошибка при смене категорий или пагинации'});
    }
}

export const getProductById = async (req, res) => {
    try {
        const productId = req.query._id;
        const foundProduct = await Product.findById(productId);

        res.json({
            message: 'Успешно получен продукт',
            foundProduct
        });
    } catch (e) {
        res.json({message: 'Ошибка получения продукта'});
    }
}

export const getTopThreeProducts = async (req, res) => {
    try {
        const foundProducts = await Product.find().limit(LIMITED_PRODUCTS);

        if (!foundProducts.length) {
            throw new Error();
        }

        res.json({
            message: 'Успешно получены продукты',
            foundProducts
        });

    } catch (e) {
        res.json({message: 'Ошибка получения продутов из новой колекции'});
    }
}

export const getRelativeProducts = async (req, res) => {
    try {
        const productId = req.query._id;
        const foundProduct = await Product.findById(productId);
        const foundProducts = await Product.find({$and: [{category: foundProduct.category}, { _id: { $ne: productId } }]}).limit(LIMITED_PRODUCTS);

        if (!foundProducts.length) {
            throw new Error();
        }

        res.json({
            message: 'Успешно получены продукты',
            foundProducts
        });

    } catch (e) {
        res.json({message: 'Ошибка получения связанных продуктов'});
    }
}