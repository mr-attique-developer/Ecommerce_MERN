import React, { useState } from 'react'
import ProductCards from './ProductCards'
import ShopFiltering from './ShopFiltering'
import { useGetAllProductsQuery } from '../../redux/features/products/productApi'

const filter = {
  categories: ["all", "accessories", "dress", "cosmetics", "jewellery"],
  colors: ["all", "red", "blue", "green", "yellow", "black", "white"],
  sizes: ["all", "small", "medium", "large", "xl", "xxl", "xxxl"],
  price: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "Under $50 - $100", min: 50, max: 100 },
    { label: "Under $100 - $200", min: 100, max: 200 },
    { label: " $200 and above", min: 200, max: Infinity }
  ],
}

const ShopPage = () => {
  const [filterData, setFilterData] = useState({
    category: "all",
    color: "all",
    price: ""
  })

  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage, setProductPerPage] = useState(8)

  const { category, color, price } = filterData
  const [minPrice, maxPrice] = price.split("-").map(Number)

  const { data, error, isLoading } = useGetAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: productPerPage
  })

  console.log('Filter Data:', filterData)
  console.log('Query Data:', { category, color, minPrice, maxPrice, page: currentPage, limit: productPerPage })
  console.log('Fetched Data:', data)

  const clearFilter = () => {
    setFilterData({
      category: "all",
      color: "all",
      price: ""
    })
  }

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error.message}</h1>

  const { products = [], totalProducts, totalPages } = data || {}

  const startPage = (currentPage - 1) * productPerPage + 1
  const endPage = startPage + products.length-1
  return (
    <>
      <div className='text-3xl flex flex-col justify-center items-center mx-auto bg-red-200 dark:bg-slate-500 h-72 p-8 rounded-md'>
        Shop Now!
        <p className='text-sm max-w-2xl mt-8'>
          Browse a diverse range of categories, from children's toys to ladies' dresses, fashion, and more.
          Elevate your style today!
        </p>
      </div>

      <div className="min-h-screen flex flex-col md:flex-row md:gap-12 gap-8">
        <ShopFiltering
          filter={filter}
          filterData={filterData}
          setFilterData={setFilterData}
          clearFilter={clearFilter}
        />

        <div className="flex-1">
          <div className='p-6'>
            <h1 className='text-3xl font-light sm:font-bold'>
              Showing {startPage} to {endPage} of {totalProducts}
            </h1>
          </div>
          <div>
            <ProductCards products={products} />

            {/* pagination controls  */}
            <div className="flex justify-center items-center mt-8">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                className="mx-1 px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded"
              >
                Previous
              </button>
              {
                [...Array(totalPages)].map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setCurrentPage(index + 1)} 
                    className={`mx-1 px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-blue-600'} rounded`}
                  >
                    {index + 1}
                  </button>
                ))
              }
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                className="mx-1 px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPage