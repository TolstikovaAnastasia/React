import { PROFILE_CONTENT } from "./actionTypes.js";

const initialState = {
    content: true
}

export const profileReducer = (state = initialState, action) => {
    switch(action?.type) {
        case PROFILE_CONTENT: {
            return {
                content: !state.content
            }
        }
        default: {
            return state;
        }
    }
}