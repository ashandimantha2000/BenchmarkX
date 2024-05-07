import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
  sessionDuration: {
    type: Number,
    required: true,
  }
});

export const Session = mongoose.model("Session", sessionSchema);