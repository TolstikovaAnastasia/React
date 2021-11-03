const composePath = (...args) => args.map((item) => (typeof item === 'function' ? item() : item.toString())).join('/');

export const getHomePath = () => '';

export const getChatsPath = () => composePath(getHomePath(), 'chats');

export const getChatsByIdPath = (chatId = ':chatId') => composePath(getChatsPath(), chatId, 'chatPage');

export const getChatsMessagePageByIdPath = (chatId = ':chatId') => composePath(getChatsPath(), chatId, 'messagePage');

export const getChat404Path = (chatId = ':chatId') => composePath(getChatsPath(), chatId, '404');

export const getMessagePage404Path = (chatId = ':chatId') => composePath(getChatsPath(), chatId, '404');