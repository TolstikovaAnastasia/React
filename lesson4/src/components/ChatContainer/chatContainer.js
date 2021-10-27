import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem } from '@material-ui/core';

export class ChatContainer extends React.Component {
    constructor() {
      super()
      this.state = {
        chat: [
          { name: " ", id: " " },
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
                <div>{this.state.chat.name}</div>
                <div>{this.state.chat.id}</div>
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