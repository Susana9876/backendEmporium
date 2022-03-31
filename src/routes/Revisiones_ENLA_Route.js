import { Router } from "express";
import { getRevisiones_ENLA,postRevisiones_ENLA, getRevisiones_ENLAById, deleteRevisiones_ENLAById, updateRevisiones_ENLAById } from "../controllers/Revisiones_ENLA_Controller";
const router = Router();

router.get('/Revisiones_ENLA', getRevisiones_ENLA)
router.post('/Revisiones_ENLA', postRevisiones_ENLA)
router.get('/Revisiones_ENLA/:Id', getRevisiones_ENLAById)
router.put('/Revisiones_ENLA/:Id', updateRevisiones_ENLAById)
router.delete('/Revisiones_ENLA/:Id', deleteRevisiones_ENLAById)






export default router