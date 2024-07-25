
import { CART_ACTION_TYPES } from "./cart.types";

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return ({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems })
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return { type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems }
}

export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear)
    return { type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems }
}

export const setCartDropdownIsVisible = (isVisible) => ({ type: CART_ACTION_TYPES.SET_CART_DROPDOWN_IS_VISIBLE, payload: isVisible })



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



