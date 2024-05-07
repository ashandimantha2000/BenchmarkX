import express from "express";
import { Heatmap } from "../models/heatmapModel.js";
const router = express.Router();

// Route to save heatmap data to the database
router.post("/", async (req, res) => {
  const { x, y } = req.body;
  const heatmap = new Heatmap({
    x,
    y,
  });
  try {
    const savedHeatmap = await heatmap.save();
    res.status(201).json(savedHeatmap);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all heatmap data from the database
router.get("/", async (req, res) => {
  try {
    const heatmap = await Heatmap.find();
    res.status(200).json(heatmap);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
