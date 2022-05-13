import { Router } from "express";
import { createProcess, getProcessById, getProcesses, updateProcessById } from "../controllers/process.controller.js";
import { isAdmin, verifyToken } from "../middlewares/index.js";
import { deleteProcessByIdService } from "../services/process.service.js";


const router = Router();
router.post("/", [isAdmin, verifyToken], createProcess);
router.get("/", [isAdmin, verifyToken], getProcesses);
router.get("/:processId", [isAdmin, verifyToken], getProcessById);
router.put("/:processId", [isAdmin, verifyToken], updateProcessById);
router.delete("/:processId", [isAdmin, verifyToken], deleteProcessByIdService);

export default router;