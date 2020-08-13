const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem);
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => (
    cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
);

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const itemExist = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(itemExist.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    if(itemExist){
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItemToRemove, quantity: cartItem.quantity - 1} : cartItem)
    }
}

export default addItemToCart;