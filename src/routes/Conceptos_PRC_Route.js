import { Router } from "express";
import { getConceptos_PRC, postConceptos_PRC, getConceptos_PRCById, deleteConceptos_PRCById, updateConceptos_PRCById } from "../controllers/Conceptos_PRC_Controller";
const router = Router();

router.get('/Conceptos_PRC', getConceptos_PRC)
router.post('/Conceptos_PRC', postConceptos_PRC)
router.get('/Conceptos_PRC/:Id', getConceptos_PRCById)
router.put('/Conceptos_PRC/:Id', updateConceptos_PRCById)
router.delete('/Conceptos_PRC/:Id', deleteConceptos_PRCById)







export default router