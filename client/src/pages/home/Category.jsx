import React from 'react'
import category1 from "../../assets/category-1.jpg"
import category2 from "../../assets/category-2.jpg"
import category3 from "../../assets/category-3.jpg"
import category4 from "../../assets/category-4.jpg"
import {Link} from 'react-router-dom'

const Category = () => {

    const categoryList = [
        {
            name: "Accessories",
            path:"accessories",
            image: category1
        },
        {
            name: "Dress Collection",
            path:"dress",
            image: category2
        },
        {
            name: "Jewellery",
            path:"jewellery",
            image: category3
        },
        {
            name: "Cosmetics",
            path:"cosmetics",
            image: category4
        },
    ]
  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 sm:max-w-xl mx-auto mt-16'>
      {
        categoryList?.map((category) => (
          <Link to={`/categories/${category.path}`} key={category.name} className='flex flex-col items-center'>
            <img className='rounded-full w-16 sm:w-full' src={category.image} alt={category.name} />
            <h3 className='text-sm sm:text-md mt-4 font-semibold'>{category.name}</h3>
          </Link>
        ))
      }
    </div>
    </>
  )
}

export default Category