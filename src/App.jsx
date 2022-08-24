import { useState, useEffect } from 'react';
import Media from 'react-media';
import { Toaster } from 'react-hot-toast';
import useSound from 'use-sound';
import Container from 'components/Container';
import MainPanel from 'components/MainPanel';
import ChatPanel from 'components/ChatPanel';
import useLocalStorage from 'hooks/useLocalStorage';
import toastCustom from 'helpers/toastCustom';
import contactsData from 'data/contacts';
import newMessage from 'assets/newMessage.mp3';

function App() {
  const [contacts, setContacts] = useLocalStorage(contactsData);
  const [idContact, setIdContact] = useState(null);
  const [play] = useSound(newMessage);

  useEffect(() => {
    window.addEventListener('keydown', onClickKeyDown);
    return () => {
      window.removeEventListener('keydown', onClickKeyDown);
    };
  });

  const onClickKeyDown = ({ code, target }) => {
    if (code === 'Escape' || target.nodeName === 'BUTTON') {
      setIdContact(null);
    }
  };

  const setId = ({ target }) => {
    setIdContact(target.dataset.id);
  };

  const idCheckedContact = contacts.findIndex(el => el.id === idContact);

  const addMessage = message => {
    if (message.owner === 'interlocutor') {
      play();
      toastCustom(
        contacts[idCheckedContact].avatar,
        contacts[idCheckedContact].name,
        message.body,
      );
    }
    contacts[idCheckedContact].message.push(message);
    setContacts([...contacts]);
  };

  const setReadMessage = () => {
    contacts[idCheckedContact].message.forEach(el => {
      if (el.read === false) {
        el.read = true;
      }
    });
    setContacts([...contacts]);
  };

  return (
    <>
      <Container>
        <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              idContact ? (
                <ChatPanel
                  checkedContact={contacts[idCheckedContact]}
                  getMessage={addMessage}
                  setReadMessage={setReadMessage}
                  idContact={idContact}
                  hundlerButton={onClickKeyDown}
                />
              ) : (
                <MainPanel contacts={contacts} handlerClick={setId} />
              )
            ) : (
              <>
                <MainPanel contacts={contacts} handlerClick={setId} />
                <ChatPanel
                  checkedContact={contacts[idCheckedContact]}
                  getMessage={addMessage}
                  setReadMessage={setReadMessage}
                  idContact={idContact}
                />
              </>
            )
          }
        </Media>
      </Container>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
