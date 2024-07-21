import { createContext, useReducer } from "react";

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

const initial_state = {
    cartItems: [],
    cartCount: 0,
    total: 0,
    cartDropDownIsVisible: false,
}

const ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_DROPDOWN_IS_VISIBLE: 'SET_CART_DROPDOWN_IS_VISIBLE'
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case ACTION_TYPES.SET_CART_DROPDOWN_IS_VISIBLE:
            return {
                ...state,
                cartDropDownIsVisible: payload
            }
        default:
            throw new Error(`unhandled type ${type} from cartReducer`)
    }
}


export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initial_state);
    const { cartDropDownIsVisible, cartItems, cartCount, total } = state;

    const setCartDropDownIsVisible = () => {
        dispatch({ type: ACTION_TYPES.SET_CART_DROPDOWN_IS_VISIBLE, payload: !cartDropDownIsVisible });
    }

    const updateCartItems = (newCartItems) => {
        const cartCount = newCartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
        const total = newCartItems.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0);
        const result = {
            cartCount,
            total,
            cartItems: newCartItems
        }
        console.log(result);
        dispatch({ type: ACTION_TYPES.SET_CART_ITEMS, payload: result })
    }

    const addItemToCart = (productToAdd) => {
        dispatch({ type: ACTION_TYPES.SET_CART_ITEMS, payload: updateCartItems(addCartItem(cartItems, productToAdd)) })
    }

    const removeItemFromCart = (cartItemToRemove) => {
        dispatch({ type: ACTION_TYPES.SET_CART_ITEMS, payload: updateCartItems(removeCartItem(cartItems, cartItemToRemove)) })
    }

    const clearItemFromCart = (cartItemToRemove) => {
        dispatch({ type: ACTION_TYPES.SET_CART_ITEMS, payload: updateCartItems(clearCartItem(cartItems, cartItemToRemove)) })
    }


    const value = { cartDropDownIsVisible, setCartDropDownIsVisible, cartItems, addItemToCart, cartCount, total, removeItemFromCart, clearItemFromCart };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}