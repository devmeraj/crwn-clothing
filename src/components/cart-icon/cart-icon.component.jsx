import React from 'react';
import {connect} from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/actions';


import './cart-icon.styles.scss';


const cartIcon = (props) => (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
        <ShoppingBag className="shopping-bag" />
        <span className="cart-total">0</span>
    </div>
);


export default connect(null, {toggleCartHidden})(cartIcon);