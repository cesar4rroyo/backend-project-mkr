import Role from "../models/Role.js";
import User from "../models/User.js"

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const {username, email} = req.body;
        const user = await User.findOne({ username: username });
        if(user){
            return res.status(400).json({
                message: "Username already exists"
            })
        }
        const userEmail = await User.findOne({email: email});
        if(userEmail){
            return res.status(400).json({
                message: "Email already exists"
            })
        }
        next();
        
    } catch (error) {
        res.status(500).json({
            message: "Error, checking username or email: " + error.message,
            error
        })
    }
}

export const checkRoleExists = async (req, res, next) => {
    try {
        const roles = await Role.find();
        const rolesReq= req.body.roles;
        if(rolesReq){
            rolesReq.map(role => {
                if(!roles.map(roleDB => roleDB.name).includes(role)){
                    return res.status(400).json({
                        message: `Role ${role} doesn't exists.`
                    })
                }
            })
        }
        next();
    } catch (error) {
        res.status(500).json({
            message: "Error, checking role exists: " + error.message,
            error
        })
    }
}