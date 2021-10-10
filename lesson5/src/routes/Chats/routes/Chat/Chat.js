import React from 'react';
import { useParams, Redirect } from "react-router-dom";
//import { getChat404Path } from "../../../../navigation/Navigation";
import { chatRoom } from "../chatRoom";
//import { NotFound } from "../../../NotFound/Error";


export const Chat = (props) => {
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