import { Router } from "express";
import { getContratista } from "../controllers/Contratista_Controller";
const router = Router();

router.get('/Contratista', getContratista)







export default router