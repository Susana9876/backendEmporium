import { Router } from "express";
import { getPrototipo } from "../controllers/Prototipo_Controller";
const router = Router();

router.get('/Prototipo', getPrototipo)







export default router