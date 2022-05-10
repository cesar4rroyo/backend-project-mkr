import { createBookingService, deleteBookingByIdService, getBookingByIdService, getBookingsService, updateBookingByIdService } from "../services/booking.service";


export const createBooking = async (req, res) => {
    try {
        const booking = await createBookingService(req);
        res.status(200).json({
            message: "Booking created successfully",
            booking
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating booking",
            error
        })
    }
}

export const getBookings = async (req, res) => {
    try {
        const bookings = await getBookingsService();
        res.status(200).json({
            message: "Bookings retrieved successfully",
            bookings
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting bookings",
            error
        })
    }
}

export const getBookingById = async (req, res) => {
    try {
        const booking = await getBookingByIdService(req);
        res.status(200).json({
            message: "Booking retrieved successfully",
            booking
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting booking",
            error
        })
    }
}

export const updateBookingById = async (req, res) => {
    try {
        const booking = await updateBookingByIdService(req);
        res.status(200).json({
            message: "Booking updated successfully",
            booking
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating booking",
            error
        })
    }
}

export const deleteBooking = async (req, res) => {
    try {
        const booking = await deleteBookingByIdService(req);
        res.status(200).json({
            message: "Booking deleted successfully",
            booking
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting booking",
            error
        })
    }
}