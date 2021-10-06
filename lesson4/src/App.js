import React, { useEffect } from "react";
import { SendMessageForm } from "./components/SendMessageForm/sendMessageForm";
import { MessageList } from "./components/MessageList/messageList";
import { ChatContainer } from "./components/ChatContainer/chatContainer";
import { Header } from "./components/Header/Header";
import { Routes } from "./routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App () {

  let message = {
    author: '',
    text: ''
  }

  useEffect(() => {
    if (message[message.author.length - 1] !== 'bot') {
      return 'Ваше сообщение могут видеть все участники чата'
    }
  });

  return(
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
        <ChatContainer />
        <MessageList />
        <SendMessageForm />
      </div>
    </BrowserRouter>
  );
}

export default App;
