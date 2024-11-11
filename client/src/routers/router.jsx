import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import App from '../App'
import ShopPage from '../pages/shop/ShopPage'
import SingleProduct from '../pages/shop/productDetails/SingleProduct'
import CategoryPage from '../pages/category/CategoryPage'
import Search from '../pages/search/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Cart from '../pages/cart/Cart'
import Contact from "../pages/Contact"
import ProtectedRoutes from '../components/ProtectedRoutes'
import Success from '../pages/checkout_payment/Success'
import Cancel from '../pages/checkout_payment/Cancel'



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:  [
            { path: "/", element: <ProtectedRoutes element={<Home />} /> },
            { path: "/shop", element: <ProtectedRoutes element={<ShopPage />} /> },
            { path: "/shop/:id", element: <ProtectedRoutes element={<SingleProduct />} /> },
            { path: "/categories/:categoryName", element: <ProtectedRoutes element={<CategoryPage />} /> },
            { path: "/search", element: <ProtectedRoutes element={<Search />} /> },
            { path: "/cart", element: <ProtectedRoutes element={<Cart />} /> },
            { path: "/contact", element: <ProtectedRoutes element={<Contact />} /> },
            { path: "/cancel", element: <ProtectedRoutes element={<Cancel />} /> },
            { path: "/success", element: <ProtectedRoutes element={<Success />} /> },
          ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },

])

export default router