import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";

import { compose, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
};

const midllewares = [loggerMiddleware, thunk];
const composedEnhancers = compose(applyMiddleware(...midllewares));

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const reducerPersist = persistReducer(persistConfig, rootReducer)

export const store = createStore(reducerPersist, undefined, composedEnhancers);

export const persistor = persistStore(store)