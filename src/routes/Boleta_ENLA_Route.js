import { Router } from "express";
import { getBoleta_ENLA, postBoleta_ENLA, getBoleta_ENLAById, deleteBoleta_ENLAById, updateBoleta_ENLAById } from "../controllers/Boleta_ENLA_Controller";
const router = Router();

router.get('/Boleta_ENLA', getBoleta_ENLA)
router.post('/Boleta_ENLA', postBoleta_ENLA)
router.get('/Boleta_ENLA/:Id', getBoleta_ENLAById)
router.put('/Boleta_ENLA/:Id', updateBoleta_ENLAById)
router.delete('/Boleta_ENLA/:Id', deleteBoleta_ENLAById)






export default router