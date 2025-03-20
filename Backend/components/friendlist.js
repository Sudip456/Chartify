import { userModel } from "../models/Usermodel.js";

async function friendlist(req, res) {
  try {
    const { id } = req.params;
    console.log("hrello", id);

    const friends = await userModel.find({ _id: { $ne: id } }, "fullname _id");
    return res.status(200).json(friends);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "Something went wrong" });
  }
}

export default friendlist;
