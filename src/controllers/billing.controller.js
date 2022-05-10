import { createBillingService, getBillingByIdService, getBillingsService, updateBillingByIdService } from "../services/billing.service";


export const createBilling = async (req, res) => {
    try {
        const billing = await createBillingService(req);
        res.status(200).json({
            message: "Billing created successfully",
            billing
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating billing",
            error
        })
    }
}

export const getBillings = async (req, res) => {
    try {
        const billing = await getBillingsService();
        res.status(200).json({
            message: "Billing retrieved successfully",
            billing
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting billing",
            error
        })
    }
}

export const getBillingById = async (req, res) => {
    try {
        const billing = await getBillingByIdService(req);
        res.status(200).json({
            message: "Billing retrieved successfully",
            billing
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting billing",
            error
        })
    }
}

export const updateBillingById = async (req, res) => {
    try {
        const billing = await updateBillingByIdService(req);
        res.status(200).json({
            message: "Billing updated successfully",
            billing
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating billing",
            error
        })
    }
}

export const deleteBilling = async (req, res) => {
    try {
        const billing = await getBillingByIdService(req);
        res.status(200).json({
            message: "Billing deleted successfully",
            billing
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting billing",
            error
        })
    }
}