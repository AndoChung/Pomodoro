import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
    {
        task: {
            type: String,
            required:true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    }
);

export const Goal = mongoose.model("Goal", goalSchema);
