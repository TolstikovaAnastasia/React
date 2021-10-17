import React from "react";
import { SendMessageForm } from "./components/SendMessageForm/sendMessageForm";
import { MessageList } from "./components/MessageList/messageList";
import { ChatsPage } from './components/ChatContainer/ChatsPage/chatsPage.js';
import { MessagePage } from './components/ChatContainer/MessagePage/messagePage.js';
import { Header } from "./components/Header/Header";
import { Routes } from "./routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App () {

  return(
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
        <ChatsPage />
        <MessagePage />
        <MessageList />
        <SendMessageForm />
      </div>
    </BrowserRouter>
  );
}

export default App;
