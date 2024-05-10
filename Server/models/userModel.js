import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  retypePassword: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign(
//     { _id: this._id, email: this.email },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "10d",
//     }
//   );
//   return token;
// };

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    retypePassword: passwordComplexity().required().label("Retype Password"),   
  });
  return schema.validate(data);
};

export { validate };
