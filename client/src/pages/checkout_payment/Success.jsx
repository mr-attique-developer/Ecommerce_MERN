import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <FaCheckCircle className="text-green-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-green-600 mb-2">Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
      <Link to="/" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default Success;