import React, { useState } from 'react'
import ProductCards from '../shop/ProductCards'

import products from '../../data/products.json'
const Search = () => {
    const [search , setSearch ] = useState("")
    const [filteredProducts, setFilteredProducts] = useState(products)
    const handleSearchProduct= (e)=>{
        e.preventDefault()

      const filtered=   products.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase() || product.description.toLocaleLowerCase().includes(search.toLowerCase()))
            
        })
        setFilteredProducts(filtered)
        setSearch("")
    }
    // console.log(search)
    
    return (
        <>
            
            <div className='text-3xl flex flex-col justify-center items-center mx-auto bg-red-200 dark:bg-slate-500   h-96 p-8 rounded-md'>

                Search Products
                <p className='text-sm max-w-2xl'> 
                    Browse a diverse range of categories, form children's toys to ladies dress , fashion, and more.
                    Elevate your style today!
                </p>
            </div>

            <form className="max-w-5xl p-8 mx-auto flex flex-col gap-3 sm:flex-row ">
                
                    
                <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                 type="text" placeholder="Search Products" className="w-full p-3  border border-gray-300 rounded-md text-black" />
                <button onClick={handleSearchProduct} className='bg-red-500 p-4 rounded-md  ' >
                    Search
                </button>
            
            </form>

            <ProductCards products={filteredProducts} />
        </>
    )
}

export default Search