import Role from "../models/Role";

export const createRoles = async () =>{
    try {
        const countRoles = await Role.estimatedDocumentCount();
        if (countRoles > 0) return;
        const values = await Promise.all([
            Role.create({name: "admin"}),
            Role.create({name: "user"}),
        ])
        console.log(values)
    } catch (error) {
        console.log(error)
    }
}