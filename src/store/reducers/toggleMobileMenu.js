import { TOGGLE_MOBILE_MENU } from './../actions/actionTypes';

const initialState = {
    isMobileMenuOpen: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MOBILE_MENU: 
            return {
                ...state, 
                isMobileMenuOpen: action.payload.isMobileMenuOpen
            }
        default:
            return state
    }
}

export default reducer;