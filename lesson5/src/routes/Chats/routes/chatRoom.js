export const chatContent = () => ({
    id: '',
    title: '',
    content: {
        author: '',
        text: ''
    }
})

export const chatContents = (count) => Array.from({
    length: count,
}).map(chatContent)

export const chatRoom = chatContents();

