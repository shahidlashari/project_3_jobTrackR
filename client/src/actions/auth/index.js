import { AUTH_USER } from '../types';

const signOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: AUTH_USER,
    payload: '',
  };
};

export default signOut;
