import {combineReducers} from 'redux';
import userReducer from './user-reducers';
import cartReducer from './cart-reducers';
import directoryReducer from './directory-reducers';
import shopReducer from './shop-reducers';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});