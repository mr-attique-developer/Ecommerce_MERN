import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import insta6 from "../../../assets/instagram-6.jpg"
import RatingStar from '../../../components/RatingStar';
import { useGetSingleProductByIdQuery } from '../../../redux/features/products/productApi';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal'; // Import Modal from react-modal

// Set the app element for accessibility
Modal.setAppElement('#root');

const SingleProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data, error, isLoading } = useGetSingleProductByIdQuery(id)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [review, setReview] = useState('');
    console.log('Single Product Data:', data); // Debugging log
    const singleProduct = data?.product
    const reviews = data?.reviews
    console.log('Single Product:', singleProduct); // Debugging log
    console.log('Reviews:', reviews); // Debugging log

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmitReview = () => {
        // Handle review submission logic here
        console.log('Review submitted:', review);
        setReview("")
        setModalIsOpen(false);

    };

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error.message}</h1>

    return (
        <>
            <div className='text-3xl flex flex-col justify-center items-center mx-auto bg-red-200 dark:bg-slate-500 h-72 p-8 rounded-md'>
                Single Product
                <p className='flex flex-wrap items-center justify-center text-base gap-2 mt-4'>
                    <span><Link to={"/"}>home</Link></span>
                    <IoIosArrowForward size={12} />
                    <span><Link to={"/shop"}>shop</Link></span>
                    <IoIosArrowForward size={12} />
                    <span><b>{singleProduct?.name}</b> and id is : <b>{id}</b> </span>
                </p>
            </div>

            <div className="min-h-screen items-center justify-center flex flex-col md:flex-row md:gap-12 gap-8 p-8">
                <div className='md:w-full'>
                    <img src={singleProduct?.image} className='sm:w-[70%] h-96 w-96 rounded-md' alt="product image" />
                </div>
                <div className='w-1/2 md:w-full'>
                    <h1 className="text-3xl font-semibold">{singleProduct?.name}</h1>
                    <p className="text-lg mt-4 text-red-500">Price: {singleProduct?.price} <s className='line-through'>{singleProduct?.oldPrice}</s></p>
                    <p className="text-lg mt-4">{singleProduct?.description}</p>

                    <div>
                        <p><strong>Category:</strong> <span>{singleProduct?.category}</span></p>
                        <p><strong>Color:</strong> <span>{singleProduct?.color}</span></p>
                        <div className='flex gap-2'>
                            <p><strong>Rating:</strong></p>
                            <RatingStar rating={singleProduct?.rating} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleAddToCart(singleProduct)
                            }}
                            className='bg-red-500 text-white px-4 py-2 rounded-md'>Add to Cart</button>
                    </div>
                </div>
                </div>
              <div className='mx-4  '>
          <button
            onClick={handleOpenModal}
            className='bg-blue-500 text-white px-8 py-2 rounded-md'>Add Review</button>
            <div>{review}</div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Add Review"
            className="modal absolute top-52 left-52  bg-white p-8 rounded-lg shadow-lg"
            overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50"
          >
            <h2>Add Review</h2>
            <input
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-2 border rounded-md"
              rows="4"
            />
            <div className='mt-4 flex justify-end gap-2'>
              <button
                onClick={handleCloseModal}
                className='bg-gray-500 text-white px-4 py-2 rounded-md'>Cancel</button>
              <button
                onClick={handleSubmitReview}
                className='bg-green-500 text-white px-4 py-2 rounded-md'>Submit</button>
            </div>
          </Modal>
        </div>
          
        </>
    )
}

export default SingleProduct