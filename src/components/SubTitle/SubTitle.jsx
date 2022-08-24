import styled from 'styled-components';
import PropTypes from 'prop-types';

function SubTitle({ children }) {
  return <Text>{children}</Text>;
}

SubTitle.propTypes = {
  children: PropTypes.node,
};

export default SubTitle;

const Text = styled.h2`
  padding: 40px 0 40px 15px;
  font-size: 26px;
  color: #91dcfc;
`;
