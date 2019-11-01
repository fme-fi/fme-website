import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import toggleMobileMenu from './reducers/toggleMobileMenu';

const rootReducer = combineReducers({
    isMobileMenuOpen: toggleMobileMenu,        
});

let composeEnhancers = compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;