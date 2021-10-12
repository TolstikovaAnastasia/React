import { MESSAGES_ADD, MESSAGES_CHANGE, MESSAGES_REMOVE } from "./actions.js";

const initialState = {
    messages: [
        {
            id: '',
            author: '',
            text: ''
        }
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch(action?.type) {
        case MESSAGES_ADD: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload,
                ]
            }
        }
        case MESSAGES_CHANGE: {
            const newMessage = [...state.messages];
            const foundIndex = newMessage.findIndex((item) => item.id === action.payload.id);
            if (foundIndex !== -1) {
                newMessage[foundIndex] = action.payload;
            }

            return {
                ...state,
                messages: newMessage,
            }
        }
        case MESSAGES_REMOVE: {
            const newMessages = state.messages.filter((item) => item.id !== action.payload);

            return {
                ...state,
                messages: newMessages,
            }
        }
        default: {
            return state;
        }
    }
}