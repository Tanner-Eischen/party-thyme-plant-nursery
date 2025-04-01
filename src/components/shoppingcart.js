
import React, { useContext } from 'react';
import { plants } from './products';
import { CartContext } from '../contexts/cartcontext.js'
import Navigate from './navigate.js'

function ShoppingCart() {
    const { cart, removeFromCart } = useContext(CartContext)

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            <h1>Shopping Cart</h1>

            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h2>
        </>
    );
};

export default ShoppingCart;
