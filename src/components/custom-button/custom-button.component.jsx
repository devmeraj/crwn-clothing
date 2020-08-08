import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, inverted, isGoogleButton, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleButton ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;