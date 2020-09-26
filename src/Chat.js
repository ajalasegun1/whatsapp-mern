import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon, Mic } from "@material-ui/icons";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import React, { useState } from "react";
import "./Chat.css";
import axios from "./axios";

//
function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const today = new Date();
    const hour = today.getHours();
    const mins = today.getMinutes();

    axios.post("/messages/new", {
      message: input,
      name: "Generic",
      time: `${hour}:${mins}`,
      received: false,
    });

    setInput("")
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg" />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((item) => (
          <p
            className={`chat__message ${item.received && "chat__receiver"}`}
            key={item._id}
          >
            <span className="chat__name" key={item.name}>
              {item.name}
            </span>{" "}
            {item.message}{" "}
            <span className="chat__timestamp" key={item.time}>
              {item.time}
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            placeholder="Type a message"
            value={input}
            onChange={handleChange}
          />
          <button type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
