import React from 'react';

export class Message extends React.Component {
  render() {
    return (
      <div className="message">{this.props.message}</div>
    );
  }
}