import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
    {
        creator: {
            type: String
        },
        message: {
            type: String,
            required:true,
        },
    }
);

export const Goal = mongoose.model("User", goalSchema);
