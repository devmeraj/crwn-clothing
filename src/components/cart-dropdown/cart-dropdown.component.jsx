import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {toggleCartHidden} from '../../redux/actions/';

import './cart-dropdown.styles.scss';

import { selectCartItems } from '../../redux/selectors/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            cartItems.length ?
            (cartItems.map(item => {
                return <CartItem key={item.id} item={item} />
            }))
            : (<span className="empty-message">No item added to the cart</span>)
        }
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkout');
                toggleCartHidden();
            }}
        >Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps, {
    toggleCartHidden
})(CartDropdown));