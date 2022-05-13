import { Router } from "express";
import { createBilling, deleteBilling, getBillingById, getBillings, updateBillingById } from "../controllers/billing.controller.js";
import { isAdmin, verifyToken } from "../middlewares/index.js";

const router = Router();

router.post("/", [isAdmin, verifyToken], createBilling);
router.get("/", [isAdmin, verifyToken], getBillings);
router.get("/:billingId", getBillingById);
router.put("/:billingId", [isAdmin, verifyToken], updateBillingById);
router.delete("/:billingId", [isAdmin, verifyToken], deleteBilling);


export default router;