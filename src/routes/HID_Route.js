import { Router } from "express";
import { getHID, postHID, getHIDById, deleteHIDById, updateHIDById } from "../controllers/HID_Controller";
const router = Router();

router.get('/HID', getHID)
router.post('/HID', postHID)
router.get('/HID/:Id', getHIDById)
router.put('/HID/:Id', updateHIDById)
router.delete('/HID/:Id', deleteHIDById)






export default router