import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cart/cartSlice"
import authApi from '../features/auth/authApi';
import authReducer from "../features/auth/authSlice"
import { productApi } from '../features/products/productApi';
import { reviewApi } from '../features/reviews/reviewApi';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath] : productApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
        auth: authReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, productApi.middleware, reviewApi.middleware),
})

export default store;
