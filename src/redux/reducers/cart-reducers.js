import addItemToCart, { removeItemFromCart, clearItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    cartHidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TOGGLE_CART_HIDDEN':
            return {...state, cartHidden: !state.cartHidden};
        case 'ADD_ITEM':
            return {...state, cartItems: addItemToCart(state.cartItems, action.payload)};
        case 'CLEAR_ITEM':
            return {...state, cartItems: clearItemFromCart(state.cartItems, action.payload)};
        case 'REMOVE_ITEM':
            return {...state, cartItems: removeItemFromCart(state.cartItems, action.payload)};
        default:
            return state;
    }
}

export default cartReducer;