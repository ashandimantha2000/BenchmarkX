import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
    {
        recommend:{
            type: String,
            required: true
        },
        again:{
            type: String,
            required: true
        },
        feedback:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Feedback = mongoose.model('Feedback',feedbackSchema);