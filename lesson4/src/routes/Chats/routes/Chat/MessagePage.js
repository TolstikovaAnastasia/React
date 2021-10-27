import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import { chatRoom } from "../chatRoom";


export const MessagePage = (props) => {
  const {chatId} = useParams();

  const chat = chatRoom.find(({id}) => id === chatId);

  if (!chat) {
    return  <Redirect to="/404"/>
  }

  return (
    <div>
      <h1>
        {chat.title}
      </h1>
      <p>
        {chat.content}
      </p>
    </div>
  );
};