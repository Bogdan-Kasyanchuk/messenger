import useLocalStorage from 'hooks/useLocalStorage';
import contactsData from 'data/contacts';

import Container from 'components/Container';
import MainPanel from 'components/MainPanel';

function App() {
  const [contacts, setContacts] = useLocalStorage(contactsData);
  return (
    <Container>
      <MainPanel contacts={contacts} />
    </Container>
  );
}

export default App;
