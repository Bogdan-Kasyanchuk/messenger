/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import User from 'components/User';
import ButtonBack from 'components/ButtonBack';
import ChatList from 'components/ChatList';
import FormSendMessange from 'components/FormSendMessange';
import StartVieWChat from 'components/StartVieWChat';
import { getJokes } from 'service/jokesAPI';
import scrollBottom from 'helpers/scrollBottom';
import CreateMessage from 'helpers/CreateMessage';

function ChatPanel({
  checkedContact,
  messages,
  getMessage,
  idContact,
  hundlerButton,
  setReadMessage,
}) {
  const [isSend, setIsSend] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const chatContainer = useRef();

  const handlerMessage = value => {
    getMessage(new CreateMessage(value, idContact, 'user'));
    setIsSend(true);
    setIsScroll(prev => !prev);
  };

  useEffect(() => {
    if (!chatContainer.current) return;
    scrollBottom(chatContainer);
    setReadMessage();
  }, [isScroll, idContact]);

  useEffect(() => {
    if (!isSend) return;
    if (checkedContact.status === 'online') {
      const idTimeOut = setTimeout(() => {
        getJokes()
          .then(data => {
            getMessage(new CreateMessage(data, idContact, 'interlocutor'));
          })
          .then(() => setIsScroll(prev => !prev))
          .catch(error => console.log(error.message));
        clearTimeout(idTimeOut);
      }, 10000);
    }
    setIsSend(false);
  }, [isSend]);

  return (
    <BoxChatPanel>
      {checkedContact ? (
        <>
          <Header>
            <User
              avatar={checkedContact.avatar}
              name={checkedContact.name}
              status={checkedContact.status}
            />
            <Media
              query="(max-width: 767px)"
              render={() => <ButtonBack hundlerButton={hundlerButton} />}
            />
          </Header>
          <BoxChatList ref={chatContainer}>
            <ChatList checkedContact={checkedContact} messages={messages} />
          </BoxChatList>
          <FormSendMessange handlerMessage={handlerMessage} />
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
