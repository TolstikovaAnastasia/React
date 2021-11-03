import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from "./Home/Home";
import { Chat } from "./Chats/chats";
import { ChatPage } from "./Chats/routes/chatPage/chatPage";
import { Profile } from "./Profile/Profile";
import { NotFound } from "./NotFound/Error";
import { getChatsByIdPath, getChatsPath } from "../navigation/Navigation";

export const Routes = (props) => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={getChatsPath()} component={Chat}>
        <Route path={getChatsByIdPath()} component={ChatPage} />
      </Route>
      <Route path="/profile" component={Profile} />
  
      <Route path="*" component={NotFound}/>
    </Switch>
  );
};