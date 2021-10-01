

import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import CartList from './CartList';
import Paypal from './Paypal';
const CartColumns = (props) => {
    const { clearCart, cartSubTotal, cartTax, cartTotal } = ProductConsumer()
    console.log(process.env)
    return (
        <CartContainer className="row">
            <div className="col-11 col-lg-10 mx-auto">

                <table className="table  table-responsive ">
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Name of Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartList />
                    </tbody>


                </table>

                <div className="col-11 justify-content-center align-items-end gap-2 d-flex flex-column">
                    <div>
                        <button className="btn btn-warning btn-lg p-2 text-white roboto " onClick={() => clearCart()}>Clear cart</button>
                    </div>
                    <div className="d-flex justify-content-center align-items-end flex-column">
                        <h4 className="roboto"><span className="font-italic">SubTotal</span>: {cartSubTotal}</h4>
                        <h4 className="roboto"><span className="font-italic">Tax</span>: {cartTax}</h4>
                        <h4 className="roboto"><span className="font-italic">Total</span>: {cartTotal}</h4>
                    </div>
                    <div>
                        <Paypal clearCart={clearCart} history={props.history} currency="INR" total={cartTotal * 73} />
                    </div>
                </div>


            </div>

        </CartContainer >
    );
}


const CartContainer = styled.div`
table{
    tr{
            vertical-align: middle;
    text-align: center;
    td{
        button{
          
            border:none;
            border-radius:5px;
            font-size:1.5rem;
            display:inline-flex;
            justify-content:center;
            align-items:center;
            padding:0 1rem;
            gap:.5rem;
            margin:.5rem;
            transition:all 0.2s ease-in-out;
            &:focus{
                animation:focusAnim 0.3s ease-in;
            }

            @keyframes focusAnim{
                from{
                     transform:scale(0.9);
                }
                to{
                     transform:scale(1);
                }
            }
            
        }
    }
    }
    tbody{
        img{
            width:100px;
            height:100px;
        }
    }
}

`


export default CartColumns;
