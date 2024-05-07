import express from "express";
import { Session } from "../models/sessionModel.js";

const router = express.Router();

// Route to save session to the database
router.post("/", async (req, res) => {
    try {
        if (!req.body.sessionDuration) {
            return res.status(400).send("No Sessions identified!");
        }
        const newSession = new Session({
            sessionDuration: req.body.sessionDuration,
        });

        const session = await newSession.save();

        return res.status(201).send(session);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error!");
    }
});

//route to get all sessions from the database
router.get("/", async (req, res) => {
    try {
        const sessions = await Session.find({});
        return res.status(200).send({
            count: sessions.length,
            data: sessions,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;