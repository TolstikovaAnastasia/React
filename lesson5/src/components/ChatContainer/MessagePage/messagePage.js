import React from 'react';
import { ListItem } from '@material-ui/core';

export class MessagePage extends React.Component {
  constructor() {
    super()
    this.state = {
      messages:
        [
          {
            author: '',
            text: '',
          }
        ]
    }
  }

  render() {
    return (
      <ul className="messagePage">
        <ListItem style={{alignItems: 'right', listStyleType: 'none'}}>
          <li>{this.messages}</li>
        </ListItem>
      </ul>
    )
  }
}