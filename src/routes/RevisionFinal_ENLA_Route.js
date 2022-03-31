import { Router } from "express";
import { getRevisionFinal_ENLA, postRevisionFinal_ENLA, getRevisionFinal_ENLAById, deleteRevisionFinal_ENLAById, updateRevisionFinal_ENLAById} from "../controllers/RevisionFinal_ENLA_Controller";
const router = Router();

router.get('/RevisionFinal_ENLA', getRevisionFinal_ENLA)
router.post('/RevisionFinal_ENLA', postRevisionFinal_ENLA)
router.get('/RevisionFinal_ENLA/:Id', getRevisionFinal_ENLAById)
router.put('/RevisionFinal_ENLA/:Id', updateRevisionFinal_ENLAById)
router.delete('/RevisionFinal_ENLA/:Id', deleteRevisionFinal_ENLAById)






export default router