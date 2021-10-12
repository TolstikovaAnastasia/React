import { createStore, combineReducers } from 'redux';
import { profileReducer } from "./profile/reducer.js";
import { messagesReducer } from "./message/reducer.js";
import { chatsReducer } from "./chats/reducer.js";

export const store = createStore(
    combineReducers({
        messages: messagesReducer,
        chats: chatsReducer,
        profile: profileReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);