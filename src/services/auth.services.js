import jwt from "jsonwebtoken";
import config from "../config.js";
import Role from "../models/Role.js";
import User from "../models/User.js";

export const getToken = async (id) => {
    return jwt.sign({ id }, config.SECRET, {
        expiresIn: 86400
    });
}

export const foundRoles = async (roles, user) => {
    if(roles){
        const foundRolesDB = await Role.find({name: {$in: roles}});
        user.roles = foundRolesDB.map(role => role._id);
        user.save();
    }else{
        const defaultRole = await Role.findOne({name: "user"});
        user.roles = [defaultRole._id];
        user.save();
    }
}

export const singUpService = async (req) => {
    const {username, email, password, roles, phone, dni, name, lastName} = req.body
    const user = await User.create(
        {
            username, 
            email, 
            phone, 
            dni, 
            name,
            lastName, 
            password: await User.encryptPassword(password)
        }
    )
    const token = await getToken(user._id)
    await foundRoles(roles, user)
    return token
}

export const singInService = async (req) => {
    const {email, password} = req.body
    const user = await User.findOne({ email:email }).populate("roles")
    if(!user){
        return {
            statuscode: 400,
            message: "User not found",
            token: null,
            user: null
        }
    }
    const isPasswordCorrect = await handleComparePassword( password, user.password)
    if(!isPasswordCorrect) {
        return {
            statuscode: 401,
            message: "Password incorrect",
            token: null,
            user: null
        }
    }
    const token = await getToken(user._id)
    
    return {
        statuscode: 200,
        message: "User signed in successfully",
        token: token,
        user: {
            username: user.username,
            email: user.email,
            roles: user.roles
        }
    }
}

export const handleComparePassword = async (password, recievedPassword) => {
    const isPasswordCorrect = await User.comparePasswords( password, recievedPassword)
    return isPasswordCorrect;
}
