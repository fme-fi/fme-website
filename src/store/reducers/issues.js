import { SET_ISSUES } from './../actions/actionTypes';

const initialState = {
    issues: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ISSUES: 
            return {
                ...state, 
                issues: action.payload.issues
            }
        default:
            return state
    }
}

export default reducer;