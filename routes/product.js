import {Router} from "express";
import {getProductById, getRelativeProducts, getTopThreeProducts, onFilter} from "../controllers/filter.js";

const router = new Router();

router.get('/filters', onFilter);
router.get('/product-info', getProductById);
router.get('/new-collection', getTopThreeProducts);
router.get('/relative', getRelativeProducts);

export default router;