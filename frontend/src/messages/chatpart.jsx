import React, { useState, useEffect } from "react";
import useMessageStore from "../models/msgstore";
import { useParams } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import io from "socket.io-client";
import "./chartpart.css";

// Connect Socket.io to your backend
const socket = io("http://localhost:8000");

const Chatpart = () => {
  const [message, setMessage] = useState("");
  const { id, friendid } = useParams();
  const {
    recieved_old_msg,
    recieved_new_msg,
    typing_status,
    select_friend_name,
    setrecieved_new_msg,
    fetchFriends,
    setOldMessages,
    setSelectFriendId,
    setSelectFriendName,
  } = useMessageStore();

  useEffect(() => {
    // Join chat when the user clicks a friend
    socket.emit("joinChat", { senderId: id, receiverId: friendid });

    socket.on("allMessages", (messages) => {
      console.log("All Messages:", messages);
      setOldMessages(messages);
    });

    // Listen for new messages
    socket.on("newMessage", (newmessage) => {
      setrecieved_new_msg(newmessage);
    });

    return () => {
      socket.off("allMessages");
      socket.off("newMessage");
    };
  }, [id, friendid, setOldMessages, setrecieved_new_msg]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // Emit the new message to the backend
    socket.emit("message", {
      senderId: id,
      receiverId: friendid,
      text: message,
    });

    setMessage("");
  };

  return (
    <div className="chat-area">
      <div id="friend-name">
        <span id="pic-chat"></span>
        <p id="name">{select_friend_name}</p>
        <span id="phone-call" className="icons">
          <i className="ri-phone-fill"></i>
        </span>
        <span id="video-call" className="icons">
          <i className="ri-video-on-line"></i>
        </span>
        <span id="more" className="icons">
          <i className="ri-more-2-fill"></i>
        </span>
      </div>
      <div id="charts">
        <div id="charts">
          {[...recieved_old_msg, ...recieved_new_msg].map((msg) => (
            <div
              key={msg._id}
              className={msg.Senderid === id ? "my-message" : "friend-message"}
            >
              {msg.Messages}
            </div>
          ))}
        </div>
      </div>

      <div id="inp-div">
        <input
          type="text"
          id="msg-inp"
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button id="msg-send" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatpart;
