import { Router } from "express";
import { getAZ,postAZ,getAZById, deleteAZById, updateProductById } from "../controllers/AZ_Controller";
const router = Router();

router.get('/AZ', getAZ)
router.post('/AZ', postAZ)
router.get('/AZ/:Id', getAZById)
router.put('/AZ/:Id', updateProductById)
router.delete('/AZ/:Id', deleteAZById)






export default router