import mongoose from "mongoose";


const bookingSchema = mongoose.Schema({
    dateInitial: {
        type: Datetime,
        required: true
    },
    dateFinal: {
        type: Datetime,
        required: true
    },
    status: { //PENDIENTE / CONFIRMADO / USADO / RECHAZADO
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },
    court: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Court",
        required: true
    },
},
 {
    timestamps: true,
    versionKey: false
 });

 export default mongoose.model("Booking", bookingSchema);

