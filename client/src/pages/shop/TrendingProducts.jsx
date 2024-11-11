import React, { useState } from 'react'
import ProductCards from './ProductCards'
import { useGetAllProductsQuery } from '../../redux/features/products/productApi'
// import products from "../../data/products.json"

const TrendingProducts = () => {
    const  [loadProducts, setLoadProducts] = useState(8)
    const loadMore = () => {
        setLoadProducts((prevCount)=> prevCount + 4)
    }
    const { data, error, isLoading } = useGetAllProductsQuery({
        
      })
      const { products = [] } = data || {}
      
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error.message}</h1>
  return (
  <>
    <div className='mt-16 flex flex-col justify-center items-center '>
        <h1 className='text-3xl font-semibold mb-4'>Trending Products </h1>
        <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas possimus et? Nobis totam adipisci quos quam, dicta cum quas sunt consectetur iste.</p>
    </div>

    {/* Product card */}
    <ProductCards products={products.slice(0,loadProducts)}/>

    {/* Load More Button  */}

{
    loadProducts < products.length && 
    <div className='flex justify-center mt-4'>
        <button onClick={loadMore} className='bg-red-700 text-white px-4 py-2 rounded-md'>Load More</button>
    </div>
}

  </>
  )
}

export default TrendingProducts