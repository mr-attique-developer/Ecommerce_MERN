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

{/* <Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<ShopPage />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/cart" element={<Cart/>} /> 
  <Route path="/search" element={<Search/>} /> 
  <Route path="/categories/:categoryName" element={<CategoryPage/>} />
  <Route path="/shop/:id" element={<SingleProduct/>} />

</Routes>
<Footer/> */}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            { path:"/", element:<Home /> },
            { path:"/shop" , element:<ShopPage/> },
            { path:"/shop/:id" , element:<SingleProduct/> },
            { path:"/categories/:categoryName" , element:<CategoryPage/> },
            { path:"/search" , element:<Search/> },
            { path:"/cart" , element:<Cart/> },
            {path: "/contact", element: <Contact />},
        ]
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