import React, { useEffect, useState } from 'react'
import ProductCards from './ProductCards'
import products from "../../data/products.json"
import ShopFiltering from './ShopFiltering'


const filter = {
  categories: ["all", "accessories", "dress", "cosmetics", "jewellery"],

  colors: ["all", "red", "blue", "green", "yellow", "black", "white"],
  sizes: ["all", "small", "medium", "large", "xl", "xxl", "xxxl"],
  price: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "Under $50 - $100", min: 50, max: 100 },
    { label: "Under $100 - $200", min: 1000, max: 200 },
    { label: " $200 and above", min: 200, max: Infinity }
  ],

}
const ShopPage = () => {
  const [productsData, setProductsData] = useState(products)
  const [filterData, setFilterData] = useState({
    category: "all",
    color: "all",
    size: "all",
    price: ""
  })

  const applyFilter = () => {
    let filteredProducts = products
    if (filterData.category !== "all") {
      filteredProducts = filteredProducts.filter((product) => product.category === filterData.category)
    }
    if (filterData.color !== "all") {
      filteredProducts = filteredProducts.filter((product) => product.color === filterData.color)
    }
    if (filterData.size !== "all") {
      filteredProducts = filteredProducts.filter((product) => product.size === filterData.size)
    }
    if (filterData.price) {
      const [min, max] = filterData.price.split("-").map(Number)
      filteredProducts = filteredProducts.filter((product) => product.price >= min && product.price <= max)
    }
    setProductsData(filteredProducts)
  }

  useEffect(() => {
    applyFilter()
  }, [filterData])

  const clearFilter = () => {
    setFilterData({
      category: "all",
      color: "all",
      size: "all",
      price: ""
    })
  }
  return (
    <>
      <div className='text-3xl flex flex-col justify-center items-center mx-auto bg-red-200 dark:bg-slate-500   h-72 p-8 rounded-md'>

        Shop Now!
        <p className='text-sm max-w-2xl mt-8'>
          Browse a diverse range of categories, form children's toys to ladies dress , fashion, and more.
          Elevate your style today!
        </p>
      </div>

      <div className=" min-h-screen flex flex-col md:flex-row md:gap-12 gap-8">



        <ShopFiltering
         filter={filter}
          filterData={filterData} setFilterData={setFilterData} clearFilter={clearFilter}
           />



        <div className="  ">
          <div className='p-6'>

            <h1 className='text-3xl font-light sm:font-bold' >Showing 1 to 8 of {productsData.length}

            </h1>
          </div>
          <div>

            <ProductCards products={productsData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPage