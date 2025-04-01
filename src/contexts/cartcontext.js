import React, { createContext, useState } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]); // Cart state

    // Add item to the cart
    const addToCart = (plant) => {
        setCart((prevCart) => [...prevCart, plant]);
    };

    // Remove item from the cart
    const removeFromCart = (plantId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== plantId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>

    );
};