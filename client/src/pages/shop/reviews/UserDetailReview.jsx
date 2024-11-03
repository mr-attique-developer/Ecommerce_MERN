import React from 'react'
import adminAvatar from "../../../assets/admin.png"

const UserDetailReview = ({ productReview }) => {
  console.log(productReview)
  return (
    <div className="p-4">
      {
        productReview.length > 0 ? (
          <div>
            <h3 className="text-xl font-semibold mb-4">All Comments...</h3>
            <div className="space-y-4">
              {
                productReview.map((review, index) => (
                  <>
                  <div key={index} className="p-4 border rounded-lg shadow-sm">
                    <div className="flex items-center space-x-4 mb-2">
                      <img src={review?.userId?.profileImage || adminAvatar} alt="" className='w-8 h-8 rounded-full' />
                      <div>
                        <p className="text-sm font-medium">{review?.userId?.email}</p>
                        <p className="text-sm text-gray-500">{review?.userId?.username}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">{new Date(review?.updatedAt).toLocaleString()}</p>
                    <p> Rating : {review?.rating}</p>
                  </div>
                  <div>

                    <p className="text-sm text-gray-700">{review?.comment}</p>
                  </div>
                  </>
                ))
              }
            </div>
          </div>
        ) : <p className="text-gray-500">NO REVIEW YET</p>
      }
    </div>
  )
}

export default UserDetailReview
