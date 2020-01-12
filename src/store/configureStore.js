import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import toggleMobileMenu from './reducers/toggleMobileMenu';
import bgImages from './reducers/getbackGroundImages'
import blur from './reducers/toggleBlur'
import issues from './reducers/issues'

const rootReducer = combineReducers({
    isMobileMenuOpen: toggleMobileMenu,
    bgImages,
    blur,
    issues,
});

let composeEnhancers = compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;