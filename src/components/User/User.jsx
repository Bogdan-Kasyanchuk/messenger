import styled from 'styled-components';
import Avatar from 'components/Avatar';
import userData from 'data/user';

function User() {
  return (
    <Div>
      <Avatar
        src={userData.avatar}
        alt={userData.name}
        status={userData.status}
      />
      <P>{userData.name}</P>
    </Div>
  );
}

export default User;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-left: 20px;
  font-size: 16px;
`;
