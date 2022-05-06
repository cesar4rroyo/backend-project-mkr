import { createCourtService, getCourtByIdService, getCourtsService } from "../services/court.service.js"


export const createCourt = async (req, res) => {
    try {
        const court = await createCourtService(req)
        res.status(201).json({
            message: "Court created successfully",
            court
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating court",
            error
        })
    }
    
}

export const getCourts = async (req, res) => {
    try {
        const courts = getCourtsService()
        res.status(200).json({
            message: "Courts retrieved successfully",
            courts
        })
    } catch (error) {
        res.status(500).json({
            message: "Error getting courts",
            error
        })        
    }
}

export const getCourtById = async (req, res) => {
    try {
        const court = await getCourtByIdService(req)
        res.status(200).json({
            message: "Court retrieved successfully",
            court
        })
    } catch (error) {
        res.status(500).json({
            message: "Error getting court",
            error  
        })
    }
       
}
export const updateCourtById = async (req, res) => {
    try {
        const court = await getCourtByIdService(req)
        res.status(200).json({
            message: "Court updated successfully",
            court
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating court",
            error
        })
    }
       
}
export const deleteCourtById = async (req, res) => {
    try {
        const court = await getCourtByIdService(req)
        res.status(204).json({message:"Court deleted"}) 
    } catch (error) {
        res.status(500).json({
            message: "Error deleting court",
            error
        })
    }
}

