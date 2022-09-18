/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import useSound from 'use-sound';
import toast from 'react-hot-toast';
import User from 'components/User';
import ButtonBack from 'components/ButtonBack';
import ChatList from 'components/ChatList';
import FormSendMessange from 'components/FormSendMessange';
import StartVieWChat from 'components/StartVieWChat';
import ToastCustom from 'components/ToastCustom';
import useContextCustom from 'hooks/useContextCustom';
import { getJokes } from 'service/jokesAPI';
import scrollBottom from 'helpers/scrollBottom';
import CreateMessage from 'helpers/CreateMessage';
import newMessage from 'assets/newMessage.mp3';

function ChatPanel() {
  const [isSend, setIsSend] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [play] = useSound(newMessage);
  const chatContainer = useRef();
  const {
    contacts,
    indexCheckedContact,
    setIndexCheckedContact,
    messages,
    setMessages,
  } = useContextCustom();

  useEffect(() => {
    window.addEventListener('keydown', onClickKeyDown);
    return () => {
      window.removeEventListener('keydown', onClickKeyDown);
    };
  });

  const onClickKeyDown = ({ code, target }) => {
    if (code === 'Escape' || target.nodeName === 'BUTTON') {
      setIndexCheckedContact(null);
    }
  };

  const addMessage = (value, user = 'user') => {
    const message = new CreateMessage(
      value,
      contacts[indexCheckedContact].id,
      user,
    );
    if (message.owner === 'interlocutor') {
      play();
      toast.custom(
        <ToastCustom
          avatar={contacts[indexCheckedContact].avatar}
          name={contacts[indexCheckedContact].name}
          message={message.body}
        />,
      );
    }
    setMessages(prev => [...prev, message]);
    if (message.owner === 'user') {
      setIsSend(true);
      setIsScroll(prev => !prev);
    }
  };

  useEffect(() => {
    if (!isSend) return;
    if (contacts[indexCheckedContact].status === 'online') {
      const idTimeOut = setTimeout(() => {
        getJokes()
          .then(data => {
            addMessage(data, 'interlocutor');
          })
          .then(() => setIsScroll(prev => !prev))
          .catch(error => console.log(error.message));
        clearTimeout(idTimeOut);
      }, 10000);
    }
    setIsSend(false);
  }, [isSend]);

  useEffect(() => {
    if (!chatContainer.current) return;
    scrollBottom(chatContainer);
    setReadMessage();
  }, [isScroll, indexCheckedContact]);

  const setReadMessage = () => {
    const copyMessages = messages.map(el => {
      if (
        el.idOwner === contacts[indexCheckedContact].id &&
        el.read === false
      ) {
        return {
          ...el,
          read: true,
        };
      } else {
        return el;
      }
    });
    setMessages(copyMessages);
  };

  return (
    <BoxChatPanel>
      {contacts[indexCheckedContact] ? (
        <>
          <Header>
            <User
              avatar={contacts[indexCheckedContact].avatar}
              name={contacts[indexCheckedContact].name}
              status={contacts[indexCheckedContact].status}
            />
            <Media
              query="(max-width: 767px)"
              render={() => <ButtonBack hundlerButton={onClickKeyDown} />}
            />
          </Header>
          <BoxChatList ref={chatContainer}>
            <ChatList />
          </BoxChatList>
          <FormSendMessange handlerMessage={addMessage} />
        </>
      ) : (
        <StartVieWChat />
      )}
    </BoxChatPanel>
  );
}

export default ChatPanel;

const BoxChatPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  border-left: 1px solid #dcdcdc;

  @media screen and (min-width: 768px) {
    flex-basis: 65%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #dcdcdc;
  background-color: #f5f5f5;
`;

const BoxChatList = styled.div`
  flex: 1 1 auto;
  padding: 5px 15px;
  border-bottom: 1px solid #dcdcdc;
  overflow-y: auto;
`;
