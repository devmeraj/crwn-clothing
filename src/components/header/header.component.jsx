import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// import { toggleCartHidden } from '../../redux/actions';


const Header = ({ currentUser, cartHidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {currentUser ?
            (<div className="option" onClick={() => {auth.signOut()}}>SIGN OUT</div>)
            :
            (<Link to="/signin" className="option">SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {console.log(cartHidden)}
        {cartHidden ? null : (<CartDropdown />)}
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    cartHidden: state.cart.cartHidden
});

export default connect(mapStateToProps)(Header);