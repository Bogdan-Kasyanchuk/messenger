import styled from 'styled-components';
import Avatar from 'components/Avatar';

function ContactItem({ el }) {
  const date = new Date(el.message[0].date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // const date1 = new Date(el.date).toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'numeric',
  //   day: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric',
  // });

  return (
    <Li>
      <Avatar src={el.avatar} alt={el.name} status={el.status} />
      <Div>
        <P1>{el.name}</P1>
        <P2>{el.message[0].body}</P2>
      </Div>
      <Time>{date}</Time>
    </Li>
  );
}

export default ContactItem;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 15px;

  :not(:last-child) {
    border-bottom: 1px solid #dcdcdc;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
`;

const P1 = styled.p`
  line-height: 1;
  margin-bottom: 10px;
  font-size: 16px;
  color: #303030;
`;

const P2 = styled.p`
  line-height: 1;
  font-size: 14px;
  color: #939393;
`;

const Time = styled.time`
  margin-left: auto;
  font-size: 14px;
  color: #939393;
`;
