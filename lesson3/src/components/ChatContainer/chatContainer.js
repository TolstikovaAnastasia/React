import React from "react";
import ReactDOM from 'react-dom';
import { List, ListItem } from '@material-ui/core';

export class ChatContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      chat: [
        { name: "", id: "" },
      ]
    }
    this.sendChat = this.sendChat.bind(this)
  }

  sendChat(name, id) {
    this.Chat.sendChat({
      name,
      id,
    })
  }
  
  render() {
    return (
      <div className="chatContainer">
        <List alignItems = "left">
          <ul>
            <li style={{ listStyleType: "none" }}>
              {this.state.chat.name}
              {this.state.chat.id}
            </li>
          </ul>
        </List>
        <ListItem />
      </div>
    )
  }
}
  
ReactDOM.render(
  <ChatContainer />,
  document.getElementById("root")
);