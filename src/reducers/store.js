import { compose, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

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

const sagaMiddleware = createSagaMiddleware();

const midllewares = [loggerMiddleware, sagaMiddleware];
const composedEnhancers = compose(applyMiddleware(...midllewares));

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const reducerPersist = persistReducer(persistConfig, rootReducer)


export const store = createStore(reducerPersist, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)

