import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const userPersistConfig = {
    key: 'user',
    storage
}


const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)