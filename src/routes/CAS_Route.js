import { Router } from "express";
import { getCAS,postCAS, getCASById, deleteCASById, updateCASById } from "../controllers/CAS_Controller";
const router = Router();

router.get('/CAS', getCAS)
router.post('/CAS', postCAS)
router.get('/CAS/:Id', getCASById)
router.put('/CAS/:Id', updateCASById)
router.delete('/CAS/:Id', deleteCASById)






export default router