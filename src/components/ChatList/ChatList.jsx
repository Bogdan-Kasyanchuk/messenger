import PropTypes from 'prop-types';
import ChatItem from 'components/ChatItem';

const ChatList = ({ checkedContact, messages }) => {
  return (
    <ul>
      {messages.map(
        el =>
          el.idOwner === checkedContact.id && (
            <ChatItem
              key={el.id}
              el={el}
              avatar={checkedContact.avatar}
              name={checkedContact.name}
            />
          ),
      )}
    </ul>
  );
};

ChatList.propTypes = {
  messages: PropTypes.array,
};

export default ChatList;
