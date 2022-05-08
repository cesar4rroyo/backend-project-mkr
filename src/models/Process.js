import mongoose from "mongoose";


const processSchema = mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
    },
    price: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Price",
        required: true
    },
    realPrice : {
        type: Number,
        required: true,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},
 {
    timestamps: true,
    versionKey: false
 });

 export default mongoose.model("Process", processSchema);

