import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required:true,
        },
        goals: {
            type: [Object],
            default: undefined,
        }
    }
);

export const User = mongoose.model("User", userSchema);
