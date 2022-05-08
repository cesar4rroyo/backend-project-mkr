import mongoose from "mongoose";


const priceSchema = mongoose.Schema({
    price : {
        type: Number,
        required: true
    },
    schedule : {
        type: String,
        required: true
    },
    court : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Court",
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},
 {
    timestamps: true,
    versionKey: false
 });

 export default mongoose.model("Price", priceSchema);

