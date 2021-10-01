
import React from "react"
import { ProductConsumer } from "../context"

import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
function Cart(props) {
    const { cart } = ProductConsumer()
    return (

        <>
            {
                cart && cart.length > 0 ?
                    <CartColumns history={props.history} />
                    :

                    <EmptyCart />


            }

        </>


    )

}

export default Cart