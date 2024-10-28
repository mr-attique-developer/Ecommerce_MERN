import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderSummary from './OrderSummary';
import { removeFromCart, updateCartQuantity } from '../../redux/features/cart/cartSlice';

const Cart = () => {
  const { products } = useSelector(state => state.cart);
  console.log(products);
  const dispatch = useDispatch()
  // console.log(updateCartQuantity)
  const handleIncrement = (type,id)=>{
    const payload = {type,id}
    dispatch(updateCartQuantity(payload))
  }
  const handleDecrement = (type,id)=>{
    const payload = {type,id}
    dispatch(updateCartQuantity(payload))
  }
  const handleRemoveFromCart = (e,id)=>{
    e.preventDefault()
    dispatch(removeFromCart({id}))
  }

  return (
    <>
      <div className="container mx-auto p-4">
        {
          products?.length === 0 ? (
            <h1 className='text-4xl flex items-center justify-center h-screen'>Cart is Empty</h1>
          ) : (
            products?.map((item, index) => (
              <div key={index} className='flex flex-col sm:flex-row items-center gap-8 sm:justify-evenly m-2  shadow-lg rounded-lg p-4 transform transition duration-500 hover:scale-105'>
                <div className='flex gap-5 items-center justify-center'>
                  <button className='rounded-full bg-red-500  w-6 sm:w-10 h-6 sm:h-10 flex items-center justify-center'>{index + 1}</button>
                  <img className='w-16 sm:w-52 rounded-lg' src={item.image} alt={item.name} />
                </div>
                <div className='text-center sm:text-left'>
                  <h1 className='text-md sm:text-xl font-semibold'>{item.name}</h1>
                  <h1 className='text-xs sm:text-lg '>${Number(item.price).toFixed(2)}</h1>
                </div>
                <div className='flex items-center gap-2'>
                  <button
                  onClick={()=>handleDecrement("decrement",item._id)}
                   className='rounded-full bg-gray-600 text-white hover:bg-red-600 w-6 sm:w-10 h-6 sm:h-10 flex items-center justify-center'>-</button>
                  <h1 className='text-md sm:text-lg'>{item.quantity}</h1>
                  <button
                  onClick={()=>handleIncrement("increment",item._id)}
                  
                  className='rounded-full bg-gray-600 text-white hover:bg-red-600 w-6 sm:w-10 h-6 sm:h-10 flex items-center justify-center'>+</button>
                </div>
                <button 
                onClick={(e)=> handleRemoveFromCart(e,item._id)}
                 className='hover:text-red-500'>Remove</button>
      
              </div>
            ))
          
          )
          
        }
        {
          products.length >0 && <OrderSummary/>
        }
      </div>
    </>
  );
}

export default Cart;