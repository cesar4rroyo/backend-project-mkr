import {Schema, model} from "mongoose"
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String,
    },
    dni: {
        type: String,
        required: true
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "Role"
    }]
},
 {
    timestamps: true,
    versionKey: false
 });

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePasswords = async (password, recievedPassword) => {
    return await bcrypt.compare(password, recievedPassword);
}

 export default model("User", userSchema);

