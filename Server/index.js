import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import feedbackRoute from "./routes/feedbackRoute.js";
import sessionRoute from "./routes/sessionRoute.js";
import varientARoute from "./routes/varientARoute.js";
import varientBRoute from "./routes/varientBRoute.js";
import heatmapRoute from "./routes/heatmapRoute.js";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

//middleware for parsing request body
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

//route for Heatmap
app.use("/heatmap", heatmapRoute);

//route to users
app.use("/register", userRoute);

//route to auth
app.use("/login", authRoute);

//connect to mongoose
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
  }); 

export default app;