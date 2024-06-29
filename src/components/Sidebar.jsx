import React from "react";
import { contacts } from "../data.js";
import { Link } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Conversations</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <Link to={`/chat/${contact.id}`}>
              <div className="contact-name">{contact.name}</div>
              <div className="last-message">{contact.lastMessage}</div>
            </Link>
          </li>
        ))}
      </ul>
      <button>Create Conversation</button>
    </div>
  );
};

export default Sidebar;
