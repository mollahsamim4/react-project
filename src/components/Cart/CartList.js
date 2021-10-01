import React from 'react';
import CartItem from './CartItem';
import { ProductConsumer } from "../context"
const CartList = (props) => {
    const { cart } = ProductConsumer()
    return (
        <>
            {cart.map(item => {
                return <CartItem key={item.id} {...item} />
            })}
        </>
    );
}

export default CartList;
