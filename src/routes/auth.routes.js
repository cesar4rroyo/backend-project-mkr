import { Router } from "express";
import { signIn, signUp, updateUser } from "../controllers/auth.controller.js";
import { checkDuplicateUsernameOrEmail, checkRoleExists } from "../middlewares/index.js";

const router = Router()

router.use((req, res, next)=>{
    res.header(
        "Access-Control-Allow-Origin",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
})

router.post(
    '/signup', 
    [checkDuplicateUsernameOrEmail, checkRoleExists],
    signUp
)
router.post('/signin', signIn)
router.put('/:userId', [verifyToken, isAdmin], upload.single('imageUrl'), updateUser) 

export default router