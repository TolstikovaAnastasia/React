import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from "./Home/Home";
import { Chats } from "./Chats/Chats";
import { MessagePage } from "./Chats/routes/Chat/MessagePage";
import { Profile } from "./Profile/Profile";
import { NotFound } from "./NotFound/Error";
import { getChatsByIdPath, getChatsPath } from "../navigation/Navigation";

export const Routes = (props) => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={getChatsPath()} component={Chats}>
        <Route path={getChatsByIdPath()} component={MessagePage} />
      </Route>
      <Route path="/profile" component={Profile} />
  
      <Route path="*" component={NotFound}/>
    </Switch>
  );
};