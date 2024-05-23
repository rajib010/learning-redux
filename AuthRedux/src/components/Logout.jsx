import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuthUser } from '../store/slice/authSlice';

function Logout() {
  const dispatch = useDispatch();
  const authUsers = useSelector((state) => state.auth.authUsers);
  const user = authUsers.length > 0 ? authUsers[0] : null; // Assume single user login

  const handleLogout = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(removeAuthUser(user.id));
      alert("User logged out");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogout}>
        <input type="submit" value="logout" />
      </form>
    </div>
  );
}

export default Logout;
