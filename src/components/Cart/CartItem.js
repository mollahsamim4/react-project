import React from 'react';
import { ProductConsumer } from "../context"
const CartItem = (props) => {
    const { cartCountDecrease, cartCountIncrease, removeItem } = ProductConsumer()
    const { id, img, title, price, count, total } = props
    return (
        <tr >
            <td>
                <img src={img} alt={title} />
            </td>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => cartCountDecrease(id)}>-</button>
                <button>{count}</button>
                <button onClick={() => cartCountIncrease(id)}>+</button>
            </td>
            <td>
                <i className="fas fa-trash-alt text-warning" onClick={() => removeItem(id)}></i>
            </td>
            <td>
                {total}
            </td>

        </tr>
    );
}

export default CartItem;
