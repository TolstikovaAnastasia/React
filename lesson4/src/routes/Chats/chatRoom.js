
export const createChat = () => ({
    id: '',
    title: '',
    messagePages: []
});

export const createChats = (count) => Array.from({
    length: count,
}).map(createChat);

export const chatRoom = createChats();

