import React, { useState } from 'react'
import Modal from 'react-modal'; // Import Modal from react-modal
import { useCreateReviewMutation, useGetReviewByUserIdQuery } from '../../../redux/features/reviews/reviewApi';
import { useSelector } from 'react-redux';
import { useGetSingleProductByIdQuery } from '../../../redux/features/products/productApi';
import { useParams } from 'react-router-dom';

// Set the app element for accessibility
Modal.setAppElement('#root');

const Review = ({ reviews }) => {
  const { id } = useParams()
  const { user } = useSelector(state => state.auth)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [createReview] = useCreateReviewMutation()
  const { data: productData, refetch } = useGetSingleProductByIdQuery(id, { skip: !id })

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    const newComment = {
      comment: review,
      rating: rating,
      userId: user?._id,
      productId: id
    }
    try {
      const response = await createReview(newComment).unwrap()
      console.log(response)
      setReview("");
      setRating(0);
      setModalIsOpen(false);
      refetch(); // Refetch the product data to get the latest reviews
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className='mx-4'>
        <button
          onClick={handleOpenModal}
          className='bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600 transition duration-300'
        >
          Add Review
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Add Review"
          className="modal bg-white p-8 rounded-lg shadow-lg w-96 "
          overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Add Review</h2>

          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
          <select
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="block w-full p-2 border rounded-md mb-4"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
            rows="4"
          />

          <div className='mt-4 flex justify-end gap-2'>
            <button
              onClick={handleCloseModal}
              className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300'
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitReview}
              className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300'
            >
              Submit
            </button>
          </div>
        </Modal>
      </div>
      <div className='mt-4'>
        {reviews?.map((review, index) => (
          <div key={index} className='border-b border-gray-200 py-4'>
            <p className='text-sm font-medium text-gray-700'>{review.comment}</p>
            <p className='text-sm text-gray-500'>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Review