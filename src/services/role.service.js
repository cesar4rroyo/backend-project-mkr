import Role from "../models/Role"


export async function createRoleService(req){
    const {name} = req.body
    const role = await Role.create({name, description})
    return role
}

export async function getRolesService(){
    const roles = await Role.find()
    return roles
}

export async function getRoleByIdService(req){
    const {id} = req.params
    const role = await Role.findById(id)
    return role
}

export async function updateRoleByIdService(req){
    const {id} = req.params
    const role = await Role.findByIdAndUpdate(id, req.body, {new: true})
    return role
}

export async function deleteRoleByIdService(req){
    const {id} = req.params
    const role = await Role.findByIdAndDelete(id)
    return role
}