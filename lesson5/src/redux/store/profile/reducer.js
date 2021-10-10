import { PROFILE_TRUE, PROFILE_FALSE } from "./actionTypes.js";

const initialState = {
    content: '',
}

export const profileReducer = (state = initialState, action) => {
    switch(action?.type) {
        case PROFILE_TRUE: {
            return {
                content: state.content + 'true'
            }
        }
        case PROFILE_FALSE: {
            return {
                content: state.content + 'false'
            }
        }
        default: {
            return state;
        }
    }
}