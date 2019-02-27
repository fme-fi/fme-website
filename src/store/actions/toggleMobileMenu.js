import { TOGGLE_MOBILE_MENU } from './actionTypes';

export const toggleMobileMenu = (isMobileMenuOpen) => ({
    type: TOGGLE_MOBILE_MENU, 
    payload: {
        isMobileMenuOpen: isMobileMenuOpen        
    }
})