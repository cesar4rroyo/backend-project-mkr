import Booking from "../models/Booking.js"
import { uploads } from '../utils/cloudinary.js'


export async function createBookingService(req){
    const uploader = async (path) => await uploads(path, 'payment-images')
    const { url } = await uploader(input.file.path)
    const booking = await Booking.create({
        ...req.body,
        status: 'PENDIENTE',
        court : req.court,
        fileUrl: url
    })
    return booking
}

export async function getBookingsService(){
    const bookings = await Booking.find().populate("court");
    return bookings;
}

export async function getBookingByIdService(req){
    const {bookingId} = req.params;
    const booking = await Booking.findById(bookingId).populate("court");
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
