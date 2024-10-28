import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import insta6 from "../../../assets/instagram-6.jpg"
import RatingStar from '../../../components/RatingStar';
 


const SingleProduct = () => {
    const {id} = useParams()
  return (
    <>
    <div className='text-3xl flex flex-col justify-center items-center mx-auto bg-red-200 dark:bg-slate-500   h-72 p-8 rounded-md'>

        Single Product 
        <p className='flex flex-wrap  items-center justify-center text-base gap-2 mt-4'>
         <span><Link to={"/"}>home</Link></span>
         <IoIosArrowForward size={12} />
         <span><Link to={"/shop"}>shop</Link></span>
        <IoIosArrowForward size={12}/>
        <span>Single Product Name  id is : {id}</span>
        </p>
      </div>

        <div className=" min-h-screen  items-center justify-center flex flex-col md:flex-row md:gap-12 gap-8 p-8">
            <div  className=' md:w-full  '>
                <img src={insta6}  className='sm:w-[70%] h-96  w-96 rounded-md'  alt=" product image" />
            </div>
            <div className='w-1/2 md:w-full ' >
               <h1 className="text-3xl font-semibold">Product Name</h1>
                <p className="text-lg mt-4 text-red-500">Price: $100 <s className='line-through'>80</s></p>
                <p className="text-lg mt-4">Product Description</p>

                <div>
                    <p><strong>Category:</strong> <span>Dress</span></p>
                    <p><strong>Color:</strong> <span>Beige</span></p>
                    <div className='flex gap-2'>
                        <p><strong>Rating:</strong></p>
                        <RatingStar rating={"4"}/>
                    </div>
                </div>
                <div className='mt-4'>
                    <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Add to Cart</button>
                    </div>
            </div>
        </div>
    </>

  )
}

export default SingleProduct