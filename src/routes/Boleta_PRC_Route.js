import { Router } from "express";
import { getBoleta_PRC, postBoleta_PRC, getBoleta_PRCById, deleteBoleta_PRCById, updateBoleta_PRCById } from "../controllers/Boleta_PRC_Controller";
const router = Router(); 

router.get('/Boleta_PRC', getBoleta_PRC)
router.post('/Boleta_PRC', postBoleta_PRC)
router.get('/Boleta_PRC/:Id', getBoleta_PRCById)
router.put('/Boleta_PRC/:Id', updateBoleta_PRCById)
router.delete('/Boleta_PRC/:Id', deleteBoleta_PRCById)







export default router