import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/App.styled';
import { FormStyle } from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth';
import { Navigate } from 'react-router-dom';
import { selectError, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useState } from 'react';
import { toggleClick } from 'utils/togglePassword';
import { notifyError } from 'utils/notify';

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);
  const dispatch = useDispatch();

  const isLogedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);

  const onSubmit = data => {
    dispatch(login(data));

    reset();
  };

  if (error) {
    notifyError('Please write the correct data');
  }

  return (
    <Container>
      {isLogedIn && <Navigate to="/contacts" replace />}
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Email</span>
          <input
            type="email"
            placeholder="user@gmail.com"
            {...register('email', { required: true })}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type={toggleInput}
            {...register('password', { required: true })}
          />
          <span
            className="eye-password"
            onClick={() =>
              toggleClick(toggleInput, setToggleInput, setToggleIcon)
            }
          >
            {toggleIcon ? <RiEyeOffLine /> : <RiEyeLine />}
          </span>
        </label>
        <button type="submit">Submit</button>
      </FormStyle>
    </Container>
  );
};

export default LoginForm;
