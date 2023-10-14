import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/contactsOperetions';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLogedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLogedIn]);

  return (
    <>
      {isLogedIn && <ContactForm />}
      <ContactList />
    </>
  );
};

export default ContactsPage;
