import express from "express";
import {User, validate } from "../models/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });
  
      const user = await User.findOne({ email: req.body.email });
      if (user)
        return res.status(409).send({ message: "User already Registered" });
  
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      const hashretypePassword = await bcrypt.hash(req.body.password, salt);
  
      await new User({
        email: req.body.email,
        password: hashPassword,
        retypePassword: hashretypePassword, 
      }).save();
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

  //router to update the user
router.put("/:id", async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });
  
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).send({ message: "User Not Found" });
  
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      const hashretypePassword = await bcrypt.hash(req.body.password, salt);
  
      user.email = req.body.email;
      user.password = hashPassword;
      user.retypePassword = hashretypePassword;
  
      await user.save();
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

export default router;
