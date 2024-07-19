import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cartDropDownIsVisible: false,
    setCartDropDownIsVisible: () => { },
    cartItems: [],
    addItemToCart: () => { },
    getCartCount: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    total: 0,
});

const addCartItem = (cartItems, productToAdd) => {
    const matchItem = cartItems.find(item => item.id === productToAdd.id);


    if (matchItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const matchItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if (matchItem.quantity === 1) {
        return cartItems.filter((cartItem) => {
            return cartItem.id !== cartItemToRemove.id;
        })
    } else {
        return cartItems.map((cartItem) => {
            return cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        })
    }
}

const clearCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter((cartItem) => {
        return cartItem.id !== cartItemToRemove.id;
    });
}


export const CartContextProvider = ({ children }) => {
    const [cartDropDownIsVisible, setCartDropDownIsVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);



    useEffect(() => {
        setCartCount(cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0))
        setTotal(cartItems.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0))
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearCartItemFromCart = (cartItemToRemove) => {
        setCartItems(clearCartItem(cartItems, cartItemToRemove))
    }



    const value = { cartDropDownIsVisible, setCartDropDownIsVisible, cartItems, addItemToCart, cartCount, total, removeItemFromCart, clearCartItemFromCart };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}