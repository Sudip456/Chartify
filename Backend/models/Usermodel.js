import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MongoDB_Connect);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit process if connection fails
  }
}
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    address: {
      type: String,
      required: true,
    },
    profilepic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

export { connectDB, userModel };
