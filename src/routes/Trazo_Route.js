import { Router } from "express";
import { getTrazo, postTrazo, getTrazoById, deleteTrazoById, updateTrazoById } from "../controllers/Trazo_Controller";
const router = Router();

router.get('/Trazo', getTrazo)
router.post('/Trazo', postTrazo)
router.get('/Trazo/:Id', getTrazoById)
router.put('/Trazo/:Id', updateTrazoById)
router.delete('/Trazo/:Id', deleteTrazoById)






export default router