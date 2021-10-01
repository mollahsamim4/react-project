import React from 'react'

import PayPalCheckout from 'react-paypal-checkout-button'
import 'react-paypal-checkout-button/dist/index.css'

const Paypal = (props) => {
    return (
        <PayPalCheckout
            clientId='Aeoz1OehJ79XCd0XKO0B7yTeTSRF4pS8YmxvKvqdyalzU2iDAITThrrwlI1g3sh6yNfsRmDB-InXpQqU'
            amount={props.total}
            currency='IINR'
            onSuccess={(data, order) => {
                console.log(data, order)
            }}
            onError={(error) => {
                console.log(error)
            }}
        />
    )
}

export default Paypal