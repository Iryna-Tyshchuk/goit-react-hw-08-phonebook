import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
