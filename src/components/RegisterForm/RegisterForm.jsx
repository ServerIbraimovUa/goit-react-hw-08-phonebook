import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container } from 'components/App.styled';
import { FormStyle } from './RegisterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'redux/auth/auth';
import { selectError, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { toggleClick } from 'utils/togglePassword';
import { notifyError } from 'utils/notify';

const schema = yup
  .object({
    name: yup.string().min(6).max(24).required(),
    email: yup.string().min(6).max(30).required(),
    password: yup.string().min(8).max(12).required(),
  })
  .required();

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const isLogedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(signUp(data));
    reset();
  };
  if (error) {
    notifyError('Please write correct data !');
  }

  return (
    <Container>
      {isLogedIn && <Navigate to="/contacts" replace />}
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Name</span>
          <input
            type="text"
            placeholder="User Name"
            {...register('name', { required: true })}
          />
          <span>{errors.name?.message}</span>
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            placeholder="user@gmail.com"
            {...register('email', { required: true })}
          />
          <span>{errors.email?.message}</span>
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
          <span>{errors.password?.message}</span>
        </label>
        <button type="submit">Submit</button>
      </FormStyle>
    </Container>
  );
};

export default RegisterForm;
