import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import getLocaleDate from 'helpers/getLocaleDate';

function ContactItem({ el }) {
  const lastMessagesDate = getLocaleDate(el.message.date, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Item data-id={el.id}>
      <Avatar src={el.avatar} alt={el.name} status={el.status} />
      <BoxContent>
        <Name>{el.name}</Name>
        <Mesagge>{el.message.body}</Mesagge>
      </BoxContent>
      <BoxTime>
        <Time>{lastMessagesDate}</Time>
        {!!el.notRead && <Quantity>{el.notRead}</Quantity>}
      </BoxTime>
    </Item>
  );
}

ContactItem.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    notRead: PropTypes.number.isRequired,
    message: PropTypes.shape({
      date: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  }),
};

export default ContactItem;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  :not(:last-child) {
    border-bottom: 1px solid #dcdcdc;
  }

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  :hover,
  :focus-visible {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  * {
    pointer-events: none;
  }
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  margin-left: 12px;
  max-width: calc(100vw - 194px);

  @media screen and (min-width: 450px) {
    margin-left: 20px;
    max-width: calc(100vw - 210px);
  }

  @media screen and (min-width: 768px) {
    max-width: calc(360px - 230px);
  }

  @media screen and (min-width: 1002px) {
    max-width: calc(35vw - 230px);
  }

  @media screen and (min-width: 1401px) {
    max-width: 270px;
  }
`;

const Name = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  color: #3c4252;
  line-height: 1.1;
`;

const Mesagge = styled.p`
  font-size: 18px;
  color: #939393;
  line-height: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const BoxTime = styled.div`
  margin-left: auto;
  min-width: 88px;
  font-size: 14px;
  text-align: right;
`;

const Time = styled.time`
  display: block;
  margin-bottom: 5px;
  color: #939393;
`;

const Quantity = styled.span`
  display: inline-block;
  padding: 5px;
  color: #3c4252;
  border-radius: 13px;
  background-color: #e0e0e0;
`;
