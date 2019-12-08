import { TOGGLE_BLUR } from './actionTypes';

export const toggleBlur = blur => ({
    type: TOGGLE_BLUR, 
    payload: {
        blur: blur
    }
})