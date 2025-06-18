import { useDispatch } from 'react-redux';
import { setUser } from '@/entities/user/model/userSlice.ts';
import * as React from 'react';
import { IoPersonSharp } from 'react-icons/io5';

export const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { id: '1', name: 'John Doe' };
    dispatch(setUser(user));
    console.log(user);
  };

  return <IoPersonSharp onClick={handleLogin}>Login</IoPersonSharp>;
};
