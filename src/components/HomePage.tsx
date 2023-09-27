
// src/components/HomePage.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { RootState } from '../redux/store';

const HomePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>Hello Nepal</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
