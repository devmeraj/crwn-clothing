import {combineReducers} from 'redux';
import userReducer from './user-reducers';
import cartReducer from './cart-reducers';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});