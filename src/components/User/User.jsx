import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';

function User({ avatar, name, status }) {
  return (
    <BoxAvatar>
      <Avatar src={avatar} alt={name} status={status} />
      <Name>{name}</Name>
    </BoxAvatar>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;

const BoxAvatar = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  margin-left: 20px;
  font-size: 26px;
`;
