import {createSelector} from 'reselect';
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
);


export const selectHiddenCartToggle = createSelector(
    [selectCart],
    cart => cart.cartHidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], cartItems => cartItems.reduce((acc, item) => (
        acc += item.quantity
    ), 0)
)

export const selectTotal = createSelector(
    [selectCartItems], cartItems => cartItems.reduce((acc, cartItem) => (
        acc+= cartItem.quantity * cartItem.price
    ), 0)
);