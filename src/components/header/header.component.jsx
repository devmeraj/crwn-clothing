import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/selectors/user.selectors';
import { selectHiddenCartToggle } from '../../redux/selectors/cart.selectors';
import { createStructuredSelector } from 'reselect';
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectHiddenCartToggle
});

export default connect(mapStateToProps)(Header);