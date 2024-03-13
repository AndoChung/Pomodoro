import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
    {
        creator: {
            type: String,
            required: true
        },
        task: {
            type: String,
            required:true,
        },
    }
);

export const Goal = mongoose.model("Goal", goalSchema);
