import React from 'react';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from "../store/slice/authSlice";

const Home = () => {
  const authUsers = useSelector((state) => state.auth.authUsers);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const userName = authUsers.length > 0 ? authUsers[0].text.userName : 'Guest';

  console.log(userName);

  return (
    <div>
      <h1>Welcome, {userName}</h1>
      {isLoggedIn && <Logout />}
    </div>
  );
};

export default Home;
