import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
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

export const Feedback = mongoose.model('Feedback',bookSchema);