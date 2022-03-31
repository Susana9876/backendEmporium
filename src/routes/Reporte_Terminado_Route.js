import { Router } from "express";
import { getReporte_Terminado, postReporte_Terminado, getReporte_TerminadoById, deleteReporte_TerminadoById, updateReporte_TerminadoById } from "../controllers/Reporte_Terminado_Controller";
const router = Router();

router.get('/Reporte_Terminado', getReporte_Terminado)
router.post('/Reporte_Terminado', postReporte_Terminado)
router.get('/Reporte_Terminado/:Id', getReporte_TerminadoById)
router.put('/Reporte_Terminado/:Id', updateReporte_TerminadoById)
router.delete('/Reporte_Terminado/:Id', deleteReporte_TerminadoById)






export default router