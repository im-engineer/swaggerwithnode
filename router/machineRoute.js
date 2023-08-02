import express from "express";
const router = express.Router();
import { document } from "../middleware/Upload";
import {addMachineDetails} from '../controller/machineController'



router.post("/addMachineDetails",document.fields([{name: 'image', maxCount: 10}, 
{name: 'pdf', maxCount: 10}]),addMachineDetails)

export default router;