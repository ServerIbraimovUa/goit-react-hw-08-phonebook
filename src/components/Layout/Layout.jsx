import { Container } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
import { HeaderStyle } from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectLoading } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import Loading from 'components/Loading/Loading';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <HeaderStyle>
        <Container>
          {<nav>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</nav>}
        </Container>
      </HeaderStyle>
      <main>{isLoading ? <Loading /> : <Outlet />}</main>
    </>
  );
};

export default Layout;
