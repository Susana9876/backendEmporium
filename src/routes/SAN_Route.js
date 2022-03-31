import { Router } from "express";
import { getSAN, postSAN, getSANById, deleteSANById, updateSANById } from "../controllers/SAN_Controller";
const router = Router();

router.get('/SAN', getSAN)
router.post('/SAN', postSAN)
router.get('/SAN/:Id', getSANById)
router.put('/SAN/:Id', updateSANById)
router.delete('/SAN/:Id', deleteSANById)






export default router