import {Schema, model} from "mongoose"


const courtSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},
 {
    timestamps: true,
    versionKey: false
 });

 export default model("Court", courtSchema);

