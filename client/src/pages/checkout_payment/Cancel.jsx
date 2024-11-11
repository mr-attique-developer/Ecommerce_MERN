import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <FaTimesCircle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-red-600 mb-2">Payment Cancelled</h1>
      <p className="text-lg text-gray-700 mb-6">Your payment was not successful. Please try again or contact support if you need assistance.</p>
      <Link to="/" className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default Cancel;