import React from 'react';
import { useParams, Redirect, Route, Link, Switch } from "react-router-dom";
import { chatRoom } from "../../chatRoom.js";
import { MessagePage } from './routes/messagePage/index';
import { getChatsMessagePageByIdPath, getMessagePage404Path } from "../../../../navigation/Navigation";
import { NotFound } from "../../../NotFound/Error";


export const ChatPage = (props) => {
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
        {chat.messagePages}
      </p>

      <Link to={getChatsMessagePageByIdPath(chatId)} >
        open messagePage
      </Link>
      <br/>
      <Switch>
        <Route path={getChatsMessagePageByIdPath()} component={MessagePage}/>
        <Route path={getMessagePage404Path()} component={NotFound}/>
      </Switch>
    </div>
  );
};