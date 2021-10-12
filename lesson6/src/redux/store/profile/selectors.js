export const profileSelector = (state) => state.content;

export const chatsListSelector = (state) => chatsSelector(state).messageList;