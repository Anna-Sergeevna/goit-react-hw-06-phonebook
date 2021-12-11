import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import s from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase().trim();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

function ContactList() {
  const contacts = useSelector(state =>
    getVisibleContacts(state.contacts.items, state.contacts.filter),
  );
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.name}>{name}:</p>
          <p className={s.number}>{number}</p>

          <button
            type='button'
            className={s.button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
