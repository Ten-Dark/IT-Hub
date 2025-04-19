import { useDispatch } from 'react-redux';
import { setUser } from '@/entities/User/model/userSlice.ts';
import styled from 'styled-components';
import * as React from 'react';

const Button = styled.div`
  background-color: black;
  color: antiquewhite;
`;

export const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { id: '1', name: 'John Doe' };
    dispatch(setUser(user));
    console.log(user);
  };

  return <Button onClick={handleLogin}>Login</Button>;
};
