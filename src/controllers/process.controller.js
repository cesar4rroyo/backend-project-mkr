import { createProcessService, deleteProcessByIdService, getProcessByIdService, getProcessesService, updateProcessByIdService } from "../services/process.service";


export const createProcess = async (req, res) => {
    try {
        const process = await createProcessService(req);
        res.status(200).json({
            message: "Process created successfully",
            process
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating process",
            error
        })
    }
}


export const getProcesses = async (req, res) => {
    try {
        const processes = await getProcessesService();
        res.status(200).json({
            message: "Processes retrieved successfully",
            processes
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting processes",
            error
        })
    }
}

export const getProcessById = async (req, res) => {
    try {
        const process = await getProcessByIdService(req);
        res.status(200).json({
            message: "Process retrieved successfully",
            process
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting process",
            error
        })
    }
}

export const updateProcessById = async (req, res) => {
    try {
        const process = await updateProcessByIdService(req);
        res.status(200).json({
            message: "Process updated successfully",
            process
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating process",
            error
        })
    }
}

export const deleteProcess = async (req, res) => {
    try {
        const process = await deleteProcessByIdService(req);
        res.status(200).json({
            message: "Process deleted successfully",
            process
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting process",
            error
        })
    }
}