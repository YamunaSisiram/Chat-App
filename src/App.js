import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes >
          <Route path="/chat/:contactId" element={<Chat/>} />
          <Route path="/" render={() => <div>Select a conversation</div>} />
        </Routes >
        {/* <Chat/> */}
      </div>
    </Router>
  );
};

export default App;
