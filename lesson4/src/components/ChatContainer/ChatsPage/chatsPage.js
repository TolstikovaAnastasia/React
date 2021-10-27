import React from 'react';
import ReactDOM from 'react-dom';
import { List } from '@material-ui/core';

export class ChatsPage extends React.Component {
    constructor() {
      super()
      this.state = {
        chats: [
            {
                id: '',
                title: '',
            }
        ]
      }
    }

    render() {
      return (
        <ul className="chatsPage">
            <List style={{alignItems: 'left', listStyleType: 'none'}}>
                <li>{this.chats}</li>
            </List>
        </ul>
      )
    }
}
  
ReactDOM.render(
    <ChatsPage>
    </ChatsPage>,
    document.getElementById("root")
);