import {Router} from "express";
import {postOrder} from "../controllers/order.js";

const router = new Router();

router.post('/', postOrder);

export default router;