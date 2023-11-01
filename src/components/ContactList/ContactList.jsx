import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Container } from 'components/App.styled';
import Filter from 'components/Filter/Filter';

const ContactList = () => {
  const { items } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const getFilterContacts = () => {
    if (filter === '') return items;

    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilterContacts();

  return (
    <Container>
      <>
        {items.length === 0 ? <h2>Empty...</h2> : <Filter />}
        <List className="sortable">
          {filteredContacts.map(({ name, id, number }) => {
            return <ContactItem key={id} name={name} id={id} number={number} />;
          })}
        </List>
      </>
    </Container>
  );
};

export default ContactList;
