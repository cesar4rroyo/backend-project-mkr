import mongoose from "mongoose";


const billingSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    total : {
        type: Number,
        required: true,
    },
    subtotal: {
        type: Number,
        required: true,
    },
    igv: {
        type: Number,
        required: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    clientDocNumber: {
        type: String,
        required: true,
    }
},
 {
    timestamps: true,
    versionKey: false
 });

 export default mongoose.model("Billing", billingSchema);

