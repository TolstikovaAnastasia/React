const composePath = (...args) => args.map((item) => (typeof item === 'function' ? item() : item.toString())).join('/');

export const getHomePath = () => '';

export const getChatsPath = () => composePath(getHomePath(), 'chats');

export const getChatsByIdPath = (chatId = ':chatId') => composePath(getChatsPath(), chatId);

export const getChat404Path = (chatId = ':chatId') => composePath(getChatsPath(), chatId, '404');