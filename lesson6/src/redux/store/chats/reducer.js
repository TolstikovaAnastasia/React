import { CHATS_MESSAGELIST, CHATS_ADD, CHATS_REMOVE } from "./actions.js";
import { nanoid } from 'nanoid';

let chatId = nanoid();

const initialState = {
    messageList: {
        [chatId]: [{}]
    }
}
 
export const chatsReducer = (state = initialState, action) => {
    switch(action?.type) {
        case CHATS_MESSAGELIST: {
            const chatMessage = state.messageList[chatId];
            return {
                ...state,
                messageList: chatMessage,
            }
        }
        case CHATS_ADD: {
            return {
                ...state,
                messageList: [
                    ...state.messageList,
                    action.payload,
                ]
            }
        }
        case CHATS_REMOVE: {
            const newMessageList = state.messageList.filter((item) => item.id !== action.payload);

            return {
                ...state,
                messageList: newMessageList,
            }
        }
        default: {
            return state;
        }
    }
}