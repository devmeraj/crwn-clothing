import React from 'react';
import {connect} from 'react-redux';

import {clearItem, removeItem, addToCart} from '../../redux/actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItem, removeItem, addToCart}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (<div className="checkout-item">
        <div className="image">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=> removeItem(cartItem)}>&#10094;</div>
            <span className="number">{quantity}</span>
            <div className="arrow" onClick={() => addToCart(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>)
};


export default connect(null, {clearItem, removeItem, addToCart })(CheckoutItem);