import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png" />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>The last message in the room</p>
      </div>
    </div>
  );
}

export default SidebarChat;
