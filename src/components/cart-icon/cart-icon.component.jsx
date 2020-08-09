import React from 'react';
import {connect} from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/actions';


import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/selectors/cart.selectors';


const cartIcon = ({toggleCartHidden, cartItemsCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBag className="shopping-bag" />
        <span className="cart-total">{cartItemsCount}</span>
    </div>
);

const mapStateToProps = state => ({
    cartItemsCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps, {toggleCartHidden})(cartIcon);