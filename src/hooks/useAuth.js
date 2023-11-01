import { useSelector } from 'react-redux';
import {
  selectAuthIsLoggedIn,
  selectAuthIsRefreshing,
  selectAuthUserData,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const user = useSelector(selectAuthUserData);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
