import React, { useEffect } from "react";
import { SendMessageForm } from "./components/SendMessageForm/sendMessageForm";
import { MessageList } from "./components/MessageList/messageList";
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
    <div className="App">
      <MessageList />
      <SendMessageForm />
    </div>
  );
}

export default App;
