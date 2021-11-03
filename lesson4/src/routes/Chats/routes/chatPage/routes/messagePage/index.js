import React from 'react';
import { chatRoom } from "../../../../chatRoom.js";
import { MessageList } from '../../../../../../components/MessageList/messageList';
import { SendMessageForm } from '../../../../../../components/SendMessageForm/sendMessageForm';
import { useParams, Redirect } from "react-router-dom";
import { getMessagePage404Path } from "../../../../../../navigation/Navigation";

export const MessagePage = (props) => {
  const {chatId} = useParams();

  const chat = chatRoom.find(({id}) => id === chatId);

  if (!chat.messagePages) {
    return <Redirect to={getMessagePage404Path(chatId)}/>
  }

  return (
    <div className="messagePage">
      <ul>
        {
          chat.messagePages.map(({messagePage, id}) => (<li key={id}>
            {messagePage}
          </li>))
        }
      </ul>
      <MessageList />
      <SendMessageForm />
    </div>
  );
};