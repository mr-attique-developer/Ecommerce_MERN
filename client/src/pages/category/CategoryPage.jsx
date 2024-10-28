import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCards from "../shop/ProductCards"
import products from "../../data/products.json"

const CategoryPage = () => {
  const { categoryName } = useParams()

  console.log(categoryName)
  const [filteredProducts, setFilteredProducts] = useState([])
 useEffect(()=>{

   const filtered = products.filter(product => product.category === categoryName)
   setFilteredProducts(filtered)
  },[categoryName])
  console.log(filteredProducts)
  
  return (
    <>

      <div>CategoryPage</div>
      <div className='text-3xl flex flex-col justify-center items-center mx-auto bg-red-300 h-96 p-8'>

        {categoryName}
        <p className='text-sm max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem dolores facere sequi nesciunt corrupti eius sint, dignissimos sit molestias temporibus hic ipsam.</p>
      </div>

      <ProductCards  products={filteredProducts} />
    </>
  )
}

export default CategoryPage