import mongoose from "mongoose";


const courtSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    staus : {
        type: String,
        default: "DISPONIBLE"  // DISPONIBLES / OCUPADA / RESERVADA / MANTENIMIENTO
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},
 {
    timestamps: true,
    versionKey: false
 });

 export default mongoose.model("Court", courtSchema);

