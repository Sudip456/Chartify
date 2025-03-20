import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    Senderid: String,
    Recieverid: String,
    Messages: String,
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("Messages", messageSchema);

export default messageModel;
