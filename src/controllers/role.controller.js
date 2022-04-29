import { createRoleService, getRolesService } from "../services/role.service"


export const createRole = (req, res) => {
    try {
        const role = await createRoleService(req)
        res.status(201).json({
            message: "Role created successfully",
            role
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating role",
            error
        })
    }
}

export const getRoles = async (req, res) => {
    try {
        const roles = await getRolesService()
        res.status(200).json({
            message: "Roles retrieved successfully",
            roles
        })
    } catch (error) {
        res.status(500).json({
            message: "Error getting roles",
            error
        })        
    }
}

export const getRoleById = async (req, res) => {
    try {
        const role = await getRoleByIdService(req)
        res.status(200).json({
            message: "Role retrieved successfully",
            role
        })
    } catch (error) {
        res.status(500).json({
            message: "Error getting role",
            error  
        })
    }
}

export const updateRoleById = async (req, res) => {
    try {
        const role = await getRoleByIdService(req)
        res.status(200).json({
            message: "Role updated successfully",
            role
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating role",
            error
        })
    }
}

export const deleteRoleById = async (req, res) => {
    try {
        const role = await getRoleByIdService(req)
        res.status(200).json({
            message: "Role deleted successfully",
            role
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting role",
            error
        })
    }
}