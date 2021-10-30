import React from 'react';
import { Link } from 'react-router-dom';
import { chatRoom } from "./routes/chatRoom";
import { getChatsByIdPath } from "../../navigation/Navigation";


export const Chats = (props) => {

  return (
    <ul>
      {
        chatRoom.map(({title, id}) => <li>
          <Link to={getChatsByIdPath(id)}>
            {title}
          </Link>
        </li>)
      }
    </ul>
  );
};