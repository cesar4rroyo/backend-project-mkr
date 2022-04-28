import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";
import { checkDuplicateUsernameOrEmail, checkRoleExists } from "../middlewares";

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

export default router