import { Router } from "express";
import { createRole, deleteRoleById, getRoleById, getRoles, updateRoleById } from "../controllers/role.controller.js";
import { isAdmin, verifyToken } from "../middlewares/index.js";

const router = Router()
router.post('/', [verifyToken, isAdmin] ,createRole)
router.get('/', [verifyToken, isAdmin], getRoles)
router.get('/:roleId',[verifyToken, isAdmin], getRoleById)
router.put('/:roleId', [verifyToken, isAdmin], updateRoleById)
router.delete('/:roleId', [verifyToken, isAdmin], deleteRoleById)

export default router