import { useState } from 'react';
import Media from 'react-media';
import { Toaster } from 'react-hot-toast';
import Container from 'components/Container';
import MainPanel from 'components/MainPanel';
import ChatPanel from 'components/ChatPanel';
import Context from 'Context';
import useLocalStorage from 'hooks/useLocalStorage';
import contactsData from 'data/contacts';
import messagesData from 'data/messages';

function App() {
  const [contacts] = useState(contactsData);
  const [indexCheckedContact, setIndexCheckedContact] = useState(-1);
  const [messages, setMessages] = useLocalStorage(messagesData);

  return (
    <>
      <Container>
        <Context.Provider
          value={{
            contacts,
            indexCheckedContact,
            setIndexCheckedContact,
            messages,
            setMessages,
          }}
        >
          <Media query="(max-width: 767px)">
            {matches =>
              matches ? (
                indexCheckedContact >= 0 && indexCheckedContact !== null ? (
                  <ChatPanel />
                ) : (
                  <MainPanel />
                )
              ) : (
                <>
                  <MainPanel />
                  <ChatPanel />
                </>
              )
            }
          </Media>
        </Context.Provider>
      </Container>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
