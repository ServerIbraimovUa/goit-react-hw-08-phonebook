import { useForm } from 'react-hook-form';

import { Container } from 'components/App.styled';
import { FormStyle } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useState } from 'react';
import { toggleClick } from 'utils/togglePassword';
import { notifyError, notifySuccess } from 'utils/notify';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [toggleInput, setToggleInput] = useState('password');
  const [toggleIcon, setToggleIcon] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(login(data))
      .unwrap()
      .then(({ user }) =>
        notifySuccess(`Welcome to your PhoneBook ${user.name}`)
      )
      .catch(err => {
        console.log(err);
        notifyError('Please write the correct Email or Password');
      });
  };

  return (
    <Container>
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
