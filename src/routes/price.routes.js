import { Router } from "express";
import { createPrice, deletePriceById, getPriceById, getPrices, updatePriceById } from "../controllers/price.controller.js";
import { isAdmin } from "../middlewares/index.js";

const router = Router();

router.post("/", isAdmin, createPrice)
router.get("/", getPrices)
router.get("/:priceId", getPriceById)
router.put("/:priceId", isAdmin, updatePriceById)
router.delete("/:priceId", isAdmin, deletePriceById)

export default router;