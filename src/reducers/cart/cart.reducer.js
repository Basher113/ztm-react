import { CART_ACTION_TYPES } from "./cart.types";

export const INITIAL_STATE = {
    cartItems: [],
    cartDropDownIsVisible: false,
}

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action
    switch (type) {
        case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        case CART_ACTION_TYPES.SET_CART_DROPDOWN_IS_VISIBLE:
            return {
                ...state,
                cartDropDownIsVisible: payload
            }
        default:
            return state;
    }
}