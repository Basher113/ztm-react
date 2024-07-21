import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { useNavigate } from "react-router";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const initialState = {
    currentUser: null,
}

const ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            throw new Error(`action type: ${type} is not valid`);
    }

}

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const { currentUser } = state;

    const setCurrentUser = (user) => {
        dispatch({ type: ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }

    const value = { currentUser, setCurrentUser }
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
                navigate('..')
            }
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>)
}