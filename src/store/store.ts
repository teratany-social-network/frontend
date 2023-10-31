import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "store/reducer/user.reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import pageReducer from "./reducer/page.reducer";



const userPersistConfig = {
    key: "teratany_user",
    storage,
};


const persistedReducer = persistReducer(userPersistConfig, userReducer);

const rootReducer = combineReducers({
    teratany_user: persistedReducer,
    teratany_page: pageReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)