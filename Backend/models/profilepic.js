import { userModel } from "../models/Usermodel.js";
import cloudinary from "cloudinary";

async function profilepicture(req, res) {
  try {
    const { id, profilepic } = req.body;

    let profilePicUrl = "";

    if (profilepic) {
      // Upload the image to Cloudinary
      const uploadResult = await cloudinary.v2.uploader.upload(profilepic, {
        folder: "user_profilepic", //  specifying the folder if needed
      });

      // Get the Cloudinary URL
      profilePicUrl = uploadResult.secure_url;

      // Update the user's profile picture in the database
      const updatedUser = await userModel.findByIdAndUpdate(
        id,
        { profilepic: profilePicUrl }, // Save the Cloudinary URL
        { new: true } // Return the updated document
      );

      // Respond with the updated user data
      return res
        .status(200)
        .json({ message: "Profile picture updated successfully" });
    } else {
      return res.status(400).json({ message: "No profile picture provided" });
    }
  } catch (err) {
    console.error("Error updating profile picture:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
}

export default profilepicture;
