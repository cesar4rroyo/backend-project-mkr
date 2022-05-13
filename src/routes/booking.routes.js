import { Router } from "express";
import { createBooking, getBookings, updateBookingById } from "../controllers/booking.controller.js";
import { verifyToken } from "../middlewares/index.js";
import { deleteBookingByIdService } from "../services/booking.service.js";
import { upload } from '../utils/multer.js'


const router = Router()
router.post('/', verifyToken, upload.single('imageUrl'), createBooking)
router.get("/", verifyToken, getBookings)
router.get("/:bookingId", verifyToken, getBookingById)
router.put("/:bookingId", verifyToken, updateBookingById)
router.delete("/:bookingId", verifyToken, deleteBookingByIdService)

export default router