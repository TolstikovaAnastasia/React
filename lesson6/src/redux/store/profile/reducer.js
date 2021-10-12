import { PROFILE_ACTIVE } from "./actions.js";

const initialState = {
    content: false,
}

export const profileReducer = (state = initialState, action) => {
    switch(action?.type) {
        case PROFILE_ACTIVE: {
            return {
                content: !state.content,
            }
        }
        default: {
            return state;
        }
    }
}