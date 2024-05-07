import express from "express";
import { Heatmap } from "../models/heatmapModel.js";
const router = express.Router();

// Route to save heatmap data to the database
router.post("/", async (req, res) => {
  try {
    if (!req.body.xLabels || !req.body.yLabels) {
      return res.status(400).send("No heatmap data identified!");
    }
    const newHeatmap = new Heatmap({
      xLabels: req.body.xLabels,
      yLabels: req.body.yLabels,
    });

    const heatmap = await newHeatmap.save();

    return res.status(201).send(heatmap);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error!");
  }
});

// Route to get all heatmap data from the database
router.get("/", async (req, res) => {
  try {
    const heatmap = await Heatmap.find();
    const count = heatmap.length;
    return res.status(200).send({ count, data: heatmap });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error!");
  }
});

export default router;
