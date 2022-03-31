import { Router } from "express";
import { getFormato, postFormato, getFormatoById, deleteFormatoById, updateFormatoById } from "../controllers/Formato_Controller";
const router = Router();

router.get('/Formato', getFormato)
router.post('/Formato', postFormato)
router.get('/Formato/:Id', getFormatoById)
router.put('/Formato/:Id', updateFormatoById)
router.delete('/Formato/:Id', deleteFormatoById)






export default router