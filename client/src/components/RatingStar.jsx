import React from 'react'

const RatingStar = ({rating}) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
        stars.push(<span key={i} className='text-yellow-400'>★</span>)
    }
  return (
    <div>{stars}</div>
  )
}

export default RatingStar