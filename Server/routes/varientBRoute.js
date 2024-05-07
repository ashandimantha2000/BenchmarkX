import express from "express";
import { VarientB } from "../models/varientBModel.js";
const router = express.Router();

// Route to save varient A data to the database
router.post("/", async (req, res) => {
    try {
        if (!req.body.varientBClicks) {
            return res.status(400).send("No Varient B data identified!");
        }
        const newVarientB = new VarientB({
            varientBClicks: req.body.varientBClicks,
        });

        const varientB = await newVarientB.save();

        return res.status(201).send(varientB);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error!");
    }
});

// Route to get all varient A data from the database
router.get("/", async (req, res) => {
    try {
        const count = await VarientB.countDocuments();
        return res.status(200).send({ count });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error!");
    }
});

export default router;