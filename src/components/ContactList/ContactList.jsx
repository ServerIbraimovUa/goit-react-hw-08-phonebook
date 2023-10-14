import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Container } from 'components/App.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Filter from 'components/Filter/Filter';
import { Navigate } from 'react-router-dom';

const ContactList = () => {
  const { items } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const isLogedIn = useSelector(selectIsLoggedIn);
  const getFilterContacts = () => {
    if (filter === '') return items;

    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilterContacts();

  return (
    <Container>
      {isLogedIn ? (
        <>
          {filteredContacts.length === 0 ? <h2>Empty...</h2> : <Filter />}
          <List>
            {filteredContacts.map(({ name, id, number }) => {
              return (
                <ContactItem key={id} name={name} id={id} number={number} />
              );
            })}
          </List>
        </>
      ) : (
        <Navigate to="/login" replace />
      )}
    </Container>
  );
};

export default ContactList;
