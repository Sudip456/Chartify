import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel } from "../models/Usermodel.js";

dotenv.config();
async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email }, "id password");
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const token = jwt.sign(
          { email: user.email, id: user._id },
          process.env.JWT_TOKEN,
          { expiresIn: "1h" }
        );
        res.cookie("token", token, { httpOnly: true, secure: true });

        return res
          .status(200)
          .json({ message: "Login successful", token, id: user._id });
      } else {
        return res
          .status(404)
          .json({ message: "Incorrect Email or Password " });
      }
    } else {
      return res.status(404).json({ message: "User not found." });
    }
  } catch (err) {
    console.log(err);

    return res.status(404).json({ message: "Login Failed" });
  }
}

export default login;
