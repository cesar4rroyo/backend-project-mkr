import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({ //COMPANY O BUSSNISS SCHEMA
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
    address: {
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
    avatarUrl: {
        type: String,
    },
    photoCloudinaryId: { 
        type: String 
    },
    documentNumber: {  //RUC O DNI
        type: String,
        required: true
    },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
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

 export default mongoose.model("User", userSchema);

