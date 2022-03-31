import { Router } from "express";
import { getENT, postENT, getENTById, deleteENTById, updateENTById } from "../controllers/ENT_Controller";
const router = Router();

router.get('/ENT', getENT)
router.post('/ENT', postENT)
router.get('/ENT/:Id', getENTById)
router.put('/ENT/:Id', updateENTById)
router.delete('/ENT/:Id', deleteENTById)






export default router