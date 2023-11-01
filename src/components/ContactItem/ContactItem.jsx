import DeleteSpinner from 'components/Loading/DeleteSpinner';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaMarker } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contactsOperetions';
import { ItemStyled } from './ContactItem.styled';
import UpdateContact from 'components/UpdateContact/UpdateContact';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const onDelete = id => {
    setIsDelete(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => setIsDelete(false));
  };
  const toggleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  return (
    <>
      <ItemStyled>
        {isUpdate ? (
          <UpdateContact
            id={id}
            toggleUpdate={toggleUpdate}
            name={name}
            number={number}
          />
        ) : (
          <>
            <span>{name}:</span>
            <span>{number}</span>
          </>
        )}
        <div className="wrapperBtn">
          <button className="updateBtn" type="button" onClick={toggleUpdate}>
            <FaMarker />
          </button>
          <button
            className="deleteBtn"
            type="button"
            disabled={isDelete}
            onClick={() => onDelete(id)}
          >
            {isDelete ? <DeleteSpinner /> : <RiDeleteBin6Line />}
          </button>
        </div>
      </ItemStyled>
    </>
  );
};

export default ContactItem;
