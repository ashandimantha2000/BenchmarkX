import { PORT, MONGO_URI } from "./.env";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import feedbackRoute from "./routes/feedbackRoute.js";
import sessionRoute from "./routes/sessionRoute.js";
import varientARoute from "./routes/varientARoute.js";
import varientBRoute from "./routes/varientBRoute.js";

const app = express();

//middleware fot parsing request body
app.use(express.json());

//middleware for handling CORS policy (Option 1)
app.use(cors());

//get request
app.get("/", (req, res) => {
  res.status(200).send("Hello from BenchmarkX");
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

//route for feedbacks
app.use("/feedback", feedbackRoute);

//route for sessions
app.use("/sessions", sessionRoute);

//route for Varients
app.use("/varientA", varientARoute);
app.use("/varientB", varientBRoute);

//connect to mongoose
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });