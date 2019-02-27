import { ALIGN_TEXT } from './../actions/actionTypes';

const initialState = {
    isMobileMenuOpen: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ALIGN_TEXT: 
            return {
                ...state, 
                isMobileMenuOpen: action.payload.isMobileMenuOpen
            }
        default:
            return state
    }
}

export default reducer;