import { RiPhoneLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth';
import { selectAuthUserData } from 'redux/auth/authSelectors';
import { DivStyle } from './UserMenu.styled';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAuthUserData);
  return (
    <>
      <NavLink to="/contacts">
        <RiPhoneLine />
        Contacts
      </NavLink>
      <DivStyle>
        <p>{name}</p>
        <button onClick={() => dispatch(logOut())}>Log out</button>
      </DivStyle>
    </>
  );
};

export default UserMenu;
