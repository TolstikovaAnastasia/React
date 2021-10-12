export const CHATS_MESSAGELIST = 'CHATS_MESSAGELIST';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_REMOVE = 'CHATS_REMOVE';

export const chatsMessageList = (messageList) => ({
    type: CHATS_MESSAGELIST,
    payload: messageList,
})

export const chatsAdd = (chat) => ({
    type: CHATS_ADD,
    payload: chat,
})

export const chatsRemove = (chatId) => ({
    type: CHATS_REMOVE,
    payload: chatId,
})