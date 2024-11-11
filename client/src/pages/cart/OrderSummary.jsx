import React from 'react';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/features/cart/cartSlice';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const OrderSummary = () => {
  const { products, tax, selectedProducts, taxRate, totalPrice, grandTotal } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = async () => {
    try {
      const stripe = await loadStripe('pk_test_51QJxNuId6qmZdeKrRo3P6uBmc3JkaSPxvuIKdDGEUDXaTFjB10GUMsXLgJ2yDprvmsKDDZHgFRq374yRcrDyhUaU00hyDsHMQv');

      const response = await axios.post('http://localhost:1000/create-checkout-session', { products });
      const session = response.data;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.log(result.error.message);
      }
    } catch (error) {
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      } else if (error.request) {
        console.log('Request data:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
      console.log('Error config:', error.config);
    }
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>
      <div className="text-lg mb-2">
        <span className="font-semibold">Selected Items:</span> {selectedProducts}
      </div>
      <div className="text-lg mb-2">
        <span className="font-semibold">Total Price:</span> ${Number(totalPrice).toFixed(2)}
      </div>
      <div className="text-lg mb-2">
        <span className="font-semibold">Tax ({taxRate * 100}%):</span> ${Number(tax).toFixed(2)}
      </div>
      <div className="text-lg font-bold mb-4">
        <span className="font-semibold">Grand Total:</span> ${Number(grandTotal).toFixed(2)}
      </div>
      <div className="flex justify-between mt-8">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="flex items-center bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          <FaTrashAlt className="mr-2" /> Clear Cart
        </button>
        <button
          onClick={handleCheckout}
          className="flex items-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          <FaShoppingCart className="mr-2" /> Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;