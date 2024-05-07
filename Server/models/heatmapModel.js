import mongoose from "mongoose";

const heatmapSchema = new mongoose.Schema({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export const Heatmap = mongoose.model("Heatmap", heatmapSchema);
