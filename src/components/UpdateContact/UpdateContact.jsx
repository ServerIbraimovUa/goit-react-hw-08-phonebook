import { FaRegSave } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateContact } from 'redux/Contacts/contactsOperetions';
import { FormStyled } from './UpdateContact.styled';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup
  .object({
    name: yup.string().min(4).max(32).required(),
    number: yup.string().min(6).max(16).required(),
  })
  .required();

const UpdateContact = ({ id, toggleUpdate, name, number }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { name, number },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSubmit = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id,
    };
    dispatch(updateContact(newContact));
    toggleUpdate();
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <input type="text" {...register('name')} autoFocus />

      <input type="text" {...register('number')} />
      <button className="saveButton" type="submit">
        <FaRegSave />
      </button>
    </FormStyled>
  );
};

export default UpdateContact;
