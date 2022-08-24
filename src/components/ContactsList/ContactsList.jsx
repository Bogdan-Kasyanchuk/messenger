import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import getTime from 'helpers/getTime';

const ContactsList = ({ filteredContacts, handlerClick }) => {
  const sortFilteredContacts = filteredContacts
    .map(el => {
      const arrayDateMessages = el.message.map(el => getTime(el.date));
      const arrayNotReadMessages = el.message.filter(el => el.read === false);
      const maxDateMessages = el.message.find(
        el => getTime(el.date) === Math.max(...arrayDateMessages),
      );

      return {
        id: el.id,
        name: el.name,
        avatar: el.avatar,
        status: el.status,
        notRead: arrayNotReadMessages.length,
        message: maxDateMessages,
      };
    })
    .sort((a, b) => getTime(b.message.date) - getTime(a.message.date));

  return (
    <ul onClick={handlerClick}>
      {sortFilteredContacts.map(el => (
        <ContactItem key={el.id} el={el} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.array,
  handlerClick: PropTypes.func,
};

export default ContactsList;
