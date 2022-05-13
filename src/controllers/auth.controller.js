import { getUsersService, singInService, singUpService, updateUserService } from "../services/auth.services.js";

export const signUp = async (req, res) => {
    try {
        const token = await singUpService(req);
        res.status(200).json({
            message: "User created successfully",
            token: token
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user: " + error.message,
            error
        })
    }

}
export const signIn = async (req, res) => {
    try {
        const result = await singInService(req);
        res.status(result.statuscode).json({
            message: result.message,
            token: result.token,
            user: result.user
        });
    } catch (error) {
        res.status(500).json({
            message: "Error signing in: " + error.message,
            error
        })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await getUsersService();
        res.status(200).json({
            message: "Users retrieved successfully",
            users
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting users",
            error
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await updateUserService(req.params.userId, req);
        res.status(200).json({
            message: "User updated successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating user: " + error.message,
            error
        })
    }
}