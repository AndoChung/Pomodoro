import mongoose from "mongoose";

const userSchema = mongoose.schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required:true,
        },
        name: {
            type: String,
            required: true,
        },
        
    });