import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/actions';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      
        if(user){
          const userRef = await createUserProfileDocument(user);
        
          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            });
          });
          
      } else {
        // console.log(user);
        this.props.setCurrentUser(user);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </div>
    );
  }
}
// const mapDispatchToProps = (user) => ({
//   setCurrentUser
// });
export default connect(null, {setCurrentUser} )(App);