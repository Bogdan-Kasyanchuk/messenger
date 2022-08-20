import styled from 'styled-components';
import ContactItem from 'components/ContactItem';

const ContactsList = ({ contactsList }) => {
  return (
    <List>
      {contactsList.map(el => (
        <ContactItem key={el.id} el={el} />
      ))}
    </List>
  );
};

export default ContactsList;

const List = styled.ul``;
