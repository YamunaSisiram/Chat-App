import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { contacts, messages } from "../data.js";
import "../App.css";
import { useEffect } from "react";

const Chat = () => {
  const { contactId } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(contactId));
  const [messageList, setMessageList] = useState(messages[contactId] || []);
  const [newMessage, setNewMessage] = useState("");
  
  useEffect(()=> {
    setMessageList(messages[contactId])
  }, [])

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedMessages = [
        { id: messageList.length + 1, sender: "You", text: newMessage, time: new Date().toLocaleTimeString().substring(2) },
        ...messageList,
        
      ];
      setMessageList(updatedMessages);
      setNewMessage("");
    }
  };

  console.log('messgaes: ', messageList, contactId)
  return (
    
    <div className="chat">
      <h2>{contact.name}</h2>
      <div className="messages">
        {messageList.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
            <div className="sender">{msg.sender}</div>
            <div className="text">{msg.text}</div>
            <div className="time">{msg.time}</div>
          </div>
        ))}
      </div>
      <div className="send-message">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
