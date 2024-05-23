import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItems } from '../store/slicers/cart';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleDelete = (itemId) => {
        dispatch(removeItems(itemId));
    };

    return (
        <div>
            <h1>Cart items</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => handleDelete(item.id)}>🚮</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
