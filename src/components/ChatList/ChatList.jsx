import ChatItem from 'components/ChatItem';
import useContextCustom from 'hooks/useContextCustom';

const ChatList = () => {
  const { contacts, indexCheckedContact, messages } = useContextCustom();

  return (
    <ul>
      {messages.map(
        el =>
          el.idOwner === contacts[indexCheckedContact].id && (
            <ChatItem
              key={el.id}
              el={el}
              avatar={contacts[indexCheckedContact].avatar}
              name={contacts[indexCheckedContact].name}
            />
          ),
      )}
    </ul>
  );
};

export default ChatList;
