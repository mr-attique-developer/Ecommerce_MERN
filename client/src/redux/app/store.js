import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cart/cartSlice"
import authApi from '../features/auth/authApi';
import authReducer from "../features/auth/authSlice"
import { productApi } from '../features/products/productApi';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath] : productApi.reducer,
        auth: authReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, productApi.middleware),
})

export default store;
