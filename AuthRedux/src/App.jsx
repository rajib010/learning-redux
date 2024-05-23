import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import { selectIsLoggedIn } from './store/slice/authSlice';

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Home />}
    </div>
  );
};

export default App;
