import express from "express";
import { VarientA } from "../models/varientAModel.js";
const router = express.Router();

// Route to save varient A data to the database
router.post("/", async (req, res) => {
    try {
        if (!req.body.varientAClicks) {
            return res.status(400).send("No Varient A data identified!");
        }
        const newVarientA = new VarientA({
            varientAClicks: req.body.varientAClicks,
        });

        const varientA = await newVarientA.save();

        return res.status(201).send(varientA);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error!");
    }
});

// Route to get all varient A data from the database
router.get("/", async (req, res) => {
    try {
        const count = await VarientA.countDocuments();
        return res.status(200).send({ count });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error!");
    }
});

export default router;