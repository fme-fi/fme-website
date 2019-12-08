import { TOGGLE_BLUR } from './../actions/actionTypes';

const initialState = {
    blur: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_BLUR: 
            return {
                ...state, 
                blur: action.payload.blur
            }
        default:
            return state
    }
}

export default reducer;