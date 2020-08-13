export const setCurrentUser = (user) => {
    // console.log(user);
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }

};

export const toggleCartHidden = () => ({
    type: 'TOGGLE_CART_HIDDEN'
});

export const addToCart = (item) => ({
    type: 'ADD_ITEM',
    payload: item
});

export const clearItem = item => ({
    type: 'CLEAR_ITEM',
    payload: item
});

export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
});