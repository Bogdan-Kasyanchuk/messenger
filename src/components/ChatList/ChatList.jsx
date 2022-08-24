import PropTypes from 'prop-types';
import ChatItem from 'components/ChatItem';

const ChatList = ({ checkedContact }) => {
  return (
    <ul>
      {checkedContact.message.map(el => (
        <ChatItem
          key={el.id}
          el={el}
          id={el.id}
          avatar={checkedContact.avatar}
          name={checkedContact.name}
        />
      ))}
    </ul>
  );
};

ChatList.propTypes = {
  checkedContact: PropTypes.shape({
    message: PropTypes.array,
  }),
};

export default ChatList;
