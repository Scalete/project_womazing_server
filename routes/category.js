import {Router} from "express";
import {getAllCategories} from "../controllers/category.js";

const router = new Router();

router.get('/', getAllCategories);

export default router;