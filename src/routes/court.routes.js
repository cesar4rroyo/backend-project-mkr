import { Router } from "express";
import { createCourt, deleteCourtById, getCourtById, getCourts, updateCourtById } from "../controllers/court.controller";
import { isAdmin, verifyToken } from "../middlewares";

const router = Router()
router.post('/', [verifyToken, isAdmin] ,createCourt)
router.get('/', getCourts)
router.get('/:courtId', getCourtById)
router.put('/:courtId', [verifyToken, isAdmin], updateCourtById)
router.delete('/:courtId', [verifyToken, isAdmin], deleteCourtById)

export default router