import styled from 'styled-components';
import SubTitle from 'components/SubTitle';
import ContactsList from 'components/ContactsList';

function ContactsMainPanel({ contactsList }) {
  return (
    <Div>
      <SubTitle>Chats</SubTitle>
      <ContactsList contactsList={contactsList} />
    </Div>
  );
}

export default ContactsMainPanel;

const Div = styled.div`
  padding-top: 15px;
`;
