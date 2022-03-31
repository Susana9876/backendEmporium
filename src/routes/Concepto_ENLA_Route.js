import { Router } from "express";
import { getConcepto_ENLA, postConcepto_ENLA, getConcepto_ENLAById, deleteConcepto_ENLAById, updateConcepto_ENLAById } from "../controllers/Concepto_ENLA_Controller";
const router = Router();

router.get('/Concepto_ENLA', getConcepto_ENLA)
router.post('/Concepto_ENLA', postConcepto_ENLA)
router.get('/Concepto_ENLA/:Id', getConcepto_ENLAById)
router.put('/Concepto_ENLA/:Id', updateConcepto_ENLAById)
router.delete('/Concepto_ENLA/:Id', deleteConcepto_ENLAById)







export default router