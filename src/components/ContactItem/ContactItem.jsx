import Loading from 'components/Loading/Loading';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contactsOperetions';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.contacts);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <li>
          <span>{name}:</span>
          <span>{number}</span>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            <RiDeleteBin6Line />
          </button>
        </li>
      )}
    </>
  );
};

export default ContactItem;
