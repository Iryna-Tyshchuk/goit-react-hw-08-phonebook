import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteContactRequest } from 'redux/contacts/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '16px' }}>
          {name}: {number}
        </p>
        <Button onClick={() => dispatch(deleteContactRequest(id))}>
          Delete
        </Button>
      </li>
    </>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
