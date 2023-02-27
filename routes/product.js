import {Router} from "express";
import {onFilter} from "../controllers/filter.js";

const router = new Router();

router.get('/filters', onFilter);

export default router;