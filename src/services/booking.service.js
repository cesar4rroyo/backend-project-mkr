import Booking from "../models/Booking.js"


export async function createBookingService(req){
    const booking = new Booking(req.body);
    await booking.save();
    return booking;
}

export async function getBookingsService(){
    const bookings = await Booking.find();
    return bookings;
}

export async function getBookingByIdService(req){
    const {bookingId} = req.params;
    const booking = await Booking.findById(bookingId);
    return booking;
}

export async function updateBookingByIdService(req){
    const {bookingId} = req.params;
    const booking = await Booking.findByIdAndUpdate(bookingId, req.body, {new: true});
    return booking;
}

export async function deleteBookingByIdService(req){
    const {bookingId} = req.params;
    const booking = await Booking.findByIdAndDelete(bookingId);
    return booking;
}
