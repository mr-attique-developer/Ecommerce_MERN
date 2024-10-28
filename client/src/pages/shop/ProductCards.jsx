import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import RatingStar from '../../components/RatingStar';
import {useDispatch } from "react-redux"
import { addToCart } from '../../redux/features/cart/cartSlice';


const ProductCards = ({ products }) => {
    // console.log(products)
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 '>
                {
                    products?.map((product, index) => (
                        <div key={index} className=' transition-all duration-300 hover:scale-110 shadow-2xl'>
                            <div className="relative">

                                <Link to={`/shop/${product._id}`}>
                                    <div>
                                        <img width={"100%"} className='h-auto sm:h-44' src={product.image} alt={product.name} />
                                    </div>
                                    <div className='flex  flex-col  items-center'>
                                        <h3 className='text-xl font-bold'>{product.name}</h3>
                                        <p className='text-md'>${product.price} <span className='line-through text-sm'>
                                            {product.oldPrice ? <s>${product.oldPrice}</s> : null} </span></p>
                                        {/* Rating Star */}
                                        <RatingStar rating={product.rating} />
                                    </div>
                                </Link>
                                <div className="absolute top-2 right-3">
                                   
                                        <h1   onClick={(e)=>handleAddToCart(product)} className='bg-red-500 p-1 cursor-pointer'><AiOutlineShoppingCart /></h1>
                                  
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductCards