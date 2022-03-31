import { Router } from "express";
import { getValores_PRC, postValores_ENLA, getValores_PRCById, deleteValores_PRCById, updateValores_PRCById } from "../controllers/Valores_PRC_Controller";
const router = Router();

router.get('/Valores_PRC', getValores_PRC)
router.post('/Valores_PRC', postValores_ENLA)
router.get('/Valores_PRC/:Id', getValores_PRCById)
router.put('/Valores_PRC/:Id', updateValores_PRCById)
router.delete('/Valores_PRC/:Id', deleteValores_PRCById)






export default router