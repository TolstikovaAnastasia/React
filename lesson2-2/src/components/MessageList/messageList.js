import React from 'react';
import ReactDOM from 'react-dom';
import './messageList.css';

export class MessageList extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: [
        { author: " ", text: " " },
      ]
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage(author, text) {
    this.User.sendMessage({
      author,
      text,
    })
  }
  
  render() {
    return (
      <ul className="messageList">
        {this.state.messages.map((message) => {
          return (
            <li key={message.id}>
              <div>{message.author}</div>
              <div>{message.text}</div>
            </li>
          )
        })}
      </ul>
    )
  }
}

ReactDOM.render(
  <MessageList />,
  document.getElementById("root")
);