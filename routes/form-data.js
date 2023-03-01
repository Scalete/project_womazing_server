import {Router} from "express";
import {addContactFormData} from "../controllers/form-data.js";

const router = new Router();

router.post('/', addContactFormData);

export default router;