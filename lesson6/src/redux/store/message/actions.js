export const MESSAGES_ADD = 'MESSAGES_ADD';
export const MESSAGES_CHANGE = 'MESSAGES_CHANGE';
export const MESSAGES_REMOVE = 'MESSAGES_REMOVE';

export const messageAdd = (message) => ({
    type: MESSAGES_ADD,
    payload: message,
})

export const messageChange = (message) => ({
    type: MESSAGES_CHANGE,
    payload: message,
})

export const messageRemove = (messageId) => ({
    type: MESSAGES_REMOVE,
    payload: messageId,
})