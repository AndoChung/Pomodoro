import mongoose from 'mongoose';

const goalSchema = mongoose.Schema(
    {
        goals: {
            type: String,
        }
    }
)

export default goalSchema;