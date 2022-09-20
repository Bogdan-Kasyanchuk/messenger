import styled from 'styled-components';
import Media from 'react-media';
import User from 'components/User';
import FilterContacts from 'components/FilterContacts';
import SubTitle from 'components/SubTitle';
import ContactsList from 'components/ContactsList';
import useContextCustom from 'hooks/useContextCustom';
import useFilter from 'hooks/useFilter';
import userData from 'data/user';

function MainPanel() {
  const { contacts, setIndexCheckedContact } = useContextCustom();
  const { value, handlerInput, filteredContacts } = useFilter(contacts);

  const setIdContact = ({ target }) => {
    setIndexCheckedContact(
      contacts.findIndex(el => el.id === target.dataset.id),
    );
  };

  return (
    <BoxMainPanel>
      <Header>
        <User
          avatar={userData.avatar}
          name={userData.name}
          status={userData.status}
        />
        <FilterContacts value={value} handlerInput={handlerInput} />
      </Header>
      <BoxContactsList>
        <Media
          query="(min-width: 768px)"
          render={() => <SubTitle>Chats</SubTitle>}
        />

        <ContactsList
          filteredContacts={filteredContacts}
          setIdContact={setIdContact}
        />
      </BoxContactsList>
    </BoxMainPanel>
  );
}

export default MainPanel;

const BoxMainPanel = styled.div`
  min-width: 320px;
  width: 100%;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    min-width: 360px;
    flex-basis: 35%;
  }
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  min-width: 320px;
  padding: 15px;
  border-bottom: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  background-color: #f5f5f5;

  @media screen and (min-width: 768px) {
    width: 35%;
    min-width: 360px;
    max-width: 490px;
  }
`;

const BoxContactsList = styled.div`
  padding-top: 160px;
`;
