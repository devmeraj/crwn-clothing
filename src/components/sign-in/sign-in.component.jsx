import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onFormSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);    
            this.setState({email: '', password: ''});
        } catch (error) {
            console.error(error.message);
            
        }
        

        
    }

    onInputChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});

    }
    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onFormSubmit}>
                    <FormInput type="email" label="email" name="email" onChange={this.onInputChange} value={this.state.email} required />
                    <FormInput type="password" label="password" name="password" onChange={this.onInputChange} value={this.state.password} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleButton>Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;