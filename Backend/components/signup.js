import { userModel } from "../models/Usermodel.js";
import bcrypt from "bcrypt";

async function signup(req, res) {
  const { fullname, username, email, password, address } = req.body;
  const checkUser = await userModel.findOne({ email: email }, "id username");
  const checkUserName = await userModel.findOne(
    { username: username },
    "username"
  );
  try {
    if (checkUser == null) {
      if (checkUserName == null) {
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);
        const user = await userModel.create({
          fullname,
          username,
          email,
          password: hashpassword,
          address,
        });
        return res
          .status(201)
          .json({ message: "User registered successfully" });
      } else {
        return res
          .status(404)
          .json({ message: "User name was already taken ." });
      }
    } else {
      return res.status(404).json({ message: "User already exists" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong " });
  }
}

export default signup;
