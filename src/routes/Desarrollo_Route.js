import { Router } from "express";
import { getDesarrollo } from "../controllers/Desarrollo_Controller";
const router = Router();

router.get('/Desarrollo', getDesarrollo)







export default router