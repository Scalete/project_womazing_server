import {Router} from "express";
import {addProduct, getAllProducts} from "../controllers/product.js";
import {onChangeCategory} from "../controllers/category.js";

const router = new Router();

router.post('/admin/add-product', addProduct);
router.get('/', getAllProducts);
router.post('/filter', onChangeCategory);

export default router;