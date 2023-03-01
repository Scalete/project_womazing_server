import {Router} from "express";
import {getTopThreeProducts, onFilter} from "../controllers/filter.js";

const router = new Router();

router.get('/filters', onFilter);
router.get('/new-collection', getTopThreeProducts);

export default router;