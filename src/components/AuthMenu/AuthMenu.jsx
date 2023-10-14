import {
  RiHomeHeartLine,
  RiFingerprintLine,
  RiDraftLine,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { ListStyle } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/">
        <RiHomeHeartLine />
        Home
      </NavLink>
      <ListStyle>
        <li>
          <NavLink to="/register">
            <RiDraftLine />
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <RiFingerprintLine />
            Login
          </NavLink>
        </li>
      </ListStyle>
    </>
  );
};

export default AuthMenu;
