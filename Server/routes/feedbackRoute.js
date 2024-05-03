import express from "express";
import { Feedback } from "../models/feedbackModel.js";

const router = express.Router();

// Route to save feedbacks to the database
router.post("/", async (req, res) => {
    try {
        if (!req.body.recommend || !req.body.again || !req.body.feedback) {
            return res.status(400).send("Please provide all the details!");
        }
        const newFeedback = new Feedback({
            recommend: req.body.recommend,
            again: req.body.again,
            feedback: req.body.feedback,
        });

        const feedback = await newFeedback.save();

        return res.status(201).send(feedback);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error!");
    }
});


// Route to get all feedbacks from the database
router.get("/", async (req, res) => {
    try {
        const feedbacks = await Feedback.find({});
        return res.status(200).send({
            count: feedbacks.length,
            data: feedbacks,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;
