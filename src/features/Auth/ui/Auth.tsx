import { useDispatch } from 'react-redux';
import { setUser } from '@/entities/User/model/userSlice.ts';

export const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { id: '1', name: 'John Doe' };
    dispatch(setUser(user));
    console.log(user);
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
};
