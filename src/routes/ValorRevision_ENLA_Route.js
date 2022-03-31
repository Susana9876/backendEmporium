import { Router } from "express";
import { getValorRevision_ENLA, postValorRevision_ENLA, getValorRevision_ENLAById, deleteValorRevision_ENLAById, updateValorRevision_ENLAById } from "../controllers/ValorRevision_ENLA_Controller";
const router = Router();

router.get('/ValorRevision_ENLA', getValorRevision_ENLA)
router.post('/ValorRevision_ENLA', postValorRevision_ENLA)
router.get('/ValorRevision_ENLA/:Id', getValorRevision_ENLAById)
router.put('/ValorRevision_ENLA/:Id', updateValorRevision_ENLAById)
router.delete('/ValorRevision_ENLA/:Id', deleteValorRevision_ENLAById)






export default router