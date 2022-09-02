import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import useContextCustom from 'hooks/useContextCustom';
import getTime from 'helpers/getTime';

const ContactsList = ({ filteredContacts, setIdContact }) => {
  const { messages } = useContextCustom();

  const sortFilteredContacts = filteredContacts
    .map(elem => {
      const arrayMessages = messages.filter(el => el.idOwner === elem.id);
      const arrayDateMessages = arrayMessages.map(el => getTime(el.date));
      const arrayNotReadMessages = arrayMessages.filter(
        el => el.read === false,
      );
      const maxDateMessages = arrayMessages.find(
        el => getTime(el.date) === Math.max(...arrayDateMessages),
      );
      return {
        id: elem.id,
        name: elem.name,
        avatar: elem.avatar,
        status: elem.status,
        notRead: arrayNotReadMessages.length,
        message: maxDateMessages,
      };
    })
    .sort((a, b) => getTime(b.message.date) - getTime(a.message.date));

  return (
    <ul onClick={setIdContact}>
      {sortFilteredContacts.map(el => (
        <ContactItem key={el.id} el={el} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.array,
  setIdContact: PropTypes.func,
};

export default ContactsList;
