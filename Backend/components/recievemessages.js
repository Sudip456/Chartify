import messageModel from "../models/messages.js";

async function recieveMessages(req, res) {
  const { id, friendid } = req.params;
  try {
    const messages = await messageModel.find({
      $or: [
        { Senderid: id, Recieverid: friendid },
        { Senderid: friendid, Recieverid: id },
      ],
    });
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(400).json({ message: "No message found" });
  }
}

export default recieveMessages;
