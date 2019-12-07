import { GET_BACKGROUND_IMAGES } from './../actions/actionTypes';

const initialState = {
    bgImages: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BACKGROUND_IMAGES: 
            return {
                ...state, 
                bgImages: action.payload.bgImages
            }
        default:
            return state
    }
}

export default reducer;