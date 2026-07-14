import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, "Username should be atleast 3 characters long"], 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, "is invalid"],
        minlength: [ 5, "Email should be atleast 5 characters long"]
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);


const userModel = mongoose.model("user", userSchema);

export default userModel;