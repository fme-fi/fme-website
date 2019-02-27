import { TOGGLE_MOBILE_MENU } from './actionTypes';

export const alignText = (isMobileMenuOpen) => ({
    type: TOGGLE_MOBILE_MENU, 
    payload: {
        isMobileMenuOpen: isMobileMenuOpen        
    }
})