import { createContext, useState } from "react";

export const CartDropDownContext = createContext({
    cartDropDownIsVisible: false,
    setCartDropDownIsVisible: () => { },
});

export const CartDropDownProvider = ({ children }) => {
    const [cartDropDownIsVisible, setCartDropDownIsVisible] = useState(false);
    const value = { cartDropDownIsVisible, setCartDropDownIsVisible };

    return (
        <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
    )
}