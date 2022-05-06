import mongoose from "mongoose";


const roleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
},
 {
    versionKey: false
 });

 export default mongoose.model("Role", roleSchema);

