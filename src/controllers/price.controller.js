import { createPriceService, getPriceByIdService, getPricesService } from "../services/price.service";


export const createPrice = async (req, res) => {
    try {
        const price = await createPriceService(req);
        res.status(200).json({
            message: "Price created successfully",
            price
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating price",
            error
        })
    }
}

export const getPrices = async (req, res) => {
    try {
        const prices = await getPricesService();
        res.status(200).json({
            message: "Prices retrieved successfully",
            prices
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting prices",
            error
        })
    }
}

export const getPriceById = async (req, res) => {
    try {
        const price = await getPriceByIdService(req);
        res.status(200).json({
            message: "Price retrieved successfully",
            price
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting price",
            error
        })
    }
}

export const updatePriceById = async (req, res) => {
    try {
        const price = await getPriceByIdService(req);
        res.status(200).json({
            message: "Price updated successfully",
            price
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating price",
            error
        })
    }
}

export const deletePriceById = async (req, res) => {
    try {
        const price = await getPriceByIdService(req);
        res.status(200).json({
            message: "Price deleted successfully",
            price
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting price",
            error
        })
    }
}