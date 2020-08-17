import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';
const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
}

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HHE38EBgsCi3kcaFDeQd6kSPxPx4RTJxxpLH11Rfv6rMvH4iIcI3qu3eByW4KV4UUinzOYcXqGWPeApawN8q0J80075oub0P2';

    return(
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is: $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeButton;