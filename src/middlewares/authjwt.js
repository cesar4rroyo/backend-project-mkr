import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token) {
            return res.status(403).json({
                message: "No token provided"
            });
        }
        const jwt = jwt.verify(token, config.SECRET)

        const user = await User.findById(jwt.id, {password: 0})
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        next();
    } catch (error) {
        res.status(403).json({
            message: "Unauthorized, error verifying token: " + error.message,
            error
        })
    }
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    await Role.find({_id: {$in: user.roles}}).then(roles => {
        if(roles.filter(role => role.name === "admin").length === 0) {
            return res.status(403).json({
                message: "Unauthorized, user is not an admin"
            })
        }
        next();
    })
}
