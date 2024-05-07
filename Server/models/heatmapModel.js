import mongoose from "mongoose";

const heatmapSchema = mongoose.Schema({
  xLabels: {
    type: Array,
    required: true,
  },

  yLabels: {
    type: Array,
    required: true,
  },
});

export const Heatmap = mongoose.model("Heatmap", heatmapSchema);