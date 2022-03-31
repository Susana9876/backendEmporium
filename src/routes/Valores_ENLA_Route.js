import { Router } from "express";
import { getValores_ENLA, postValores_ENLA, getValores_ENLAById, deleteValores_ENLAById, updateValores_ENLAById } from "../controllers/Valores_ENLA_Controller";
const router = Router();

router.get('/Valores_ENLA', getValores_ENLA)
router.post('/Valores_ENLA', postValores_ENLA)
router.get('/Valores_ENLA/:Id', getValores_ENLAById)
router.put('/Valores_ENLA/:Id', updateValores_ENLAById)
router.delete('/Valores_ENLA/:Id', deleteValores_ENLAById)






export default router