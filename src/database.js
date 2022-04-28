import mongoose from "mongoose";


mongoose.connect("mongodb://localhost/goldb")
        .then(db=>console.log("DB connected"))
        .catch(err=>console.log(err));