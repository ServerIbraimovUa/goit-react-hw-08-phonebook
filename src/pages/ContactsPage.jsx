import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { useAuth } from 'hooks/useAuth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/contactsOperetions';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <ContactForm />
      <ContactList />
    </>
  );
};

export default ContactsPage;
