import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth';

import Loading from './Loading/Loading';
import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from './PrivateRoute/PrivateRote';
import { PublicRoute } from './PublicRoute/PublicRoute';
const Layout = lazy(() => import('components/Layout/Layout'));
const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
    ),
  },
  {
    path: '/login',
    element: <PublicRoute redirectTo="/contacts" component={<LoginPage />} />,
  },
  {
    path: '/contacts',
    element: <PrivateRoute redirectTo="/login" component={<ContactsPage />} />,
  },
];
export default function App() {
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}
