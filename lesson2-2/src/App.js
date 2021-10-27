import React from "react";
import { SendMessageForm } from "./components/SendMessageForm/sendMessageForm";
import { MessageList } from "./components/MessageList/messageList";
import './App.css';

function App () {

  return(
    <div className="App">
      <MessageList />
      <SendMessageForm />
    </div>
  );
}

export default App;
