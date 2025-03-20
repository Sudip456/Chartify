import { Server } from "socket.io";
import messageModel from "./models/messages.js";

function setupSocket(server) {
  try {
    const io = new Server(server, {
      cors: { origin: "*" }, // Allow frontend connection
    });

    io.on("connection", (socket) => {
      console.log("A user connected");

      // User joins chat when clicking a friend
      socket.on("joinChat", async ({ senderId, receiverId }) => {
        socket.join(senderId); // Join sender's room
        socket.join(receiverId); // Join receiver's room

        // Fetch old messages between sender and receiver
        const messages = await messageModel
          .find({
            $or: [
              { Senderid: senderId, Recieverid: receiverId },
              { Senderid: receiverId, Recieverid: senderId },
            ],
          })
          .sort({ createdAt: 1 });

        // Send past messages to the user who joined
        socket.emit("allMessages", messages);
      });

      // Handle sending messages
      socket.on("message", async (data) => {
        const { senderId, receiverId, text } = data;

        // Save message to DB
        const newMessage = new messageModel({
          Senderid: senderId,
          Recieverid: receiverId,
          Messages: text,
        });
        await newMessage.save();

        // Emit message to sender and receiver only
        io.to(senderId).to(receiverId).emit("newMessage", newMessage);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });

    return io;
  } catch (error) {
    console.log(error);
  }
}

export default setupSocket;
