import { Router } from "express";
import { createCourt, deleteCourtById, getCourtById, getCourts, updateCourtById } from "../controllers/court.controller.js";
import { isAdmin, verifyToken } from "../middlewares/index.js";
import { upload } from '../utils/multer.js'

const router = Router()
router.post('/', [verifyToken, isAdmin], upload.single('imageUrl') ,createCourt)
router.get('/', getCourts)
router.get('/:courtId', getCourtById)
router.put('/:courtId', [verifyToken, isAdmin], updateCourtById)
router.delete('/:courtId', [verifyToken, isAdmin], deleteCourtById)

export default router