import mongoose from "mongoose";

const varientASchema = mongoose.Schema({
  varientAClicks: {
    type: Number,
    required: true,
  }
});

export const VarientA = mongoose.model("VarientA", varientASchema);