import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = ({ element }) => {
  const user = useSelector((state) => state.auth.user);
  console.log(user)

  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoutes;