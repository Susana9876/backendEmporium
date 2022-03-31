import { Router } from "express";
import { getSupervisor } from "../controllers/Supervisor_Controller";
const router = Router();

router.get('/Supervisor', getSupervisor)







export default router