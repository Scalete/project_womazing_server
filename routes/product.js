import {Router} from "express";
import {addProduct, getAllProducts} from "../controllers/product.js";

const router = new Router();

router.post('/admin/add-product', addProduct);
router.get('/', getAllProducts);

export default router;