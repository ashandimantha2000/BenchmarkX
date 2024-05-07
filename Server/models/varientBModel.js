import mongoose from "mongoose";

const varientBSchema = mongoose.Schema({
  varientBClicks: {
    type: Number,
    required: true,
  }
});

export const VarientB = mongoose.model("VarientB", varientBSchema);