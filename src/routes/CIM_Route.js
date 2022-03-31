import { Router } from "express";
import { getCIM, postCAS, getCIMById, deleteCIMById, updateCIMById } from "../controllers/CIM_Controller";
const router = Router();

router.get('/CIM', getCIM)
router.post('/CIM', postCAS)
router.get('/CIM/:Id', getCIMById)
router.put('/CIM/:Id', updateCIMById)
router.delete('/CIM/:Id', deleteCIMById)






export default router