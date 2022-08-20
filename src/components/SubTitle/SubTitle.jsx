import PropTypes from 'prop-types';
import styled from 'styled-components';

function SubTitle({ children }) {
  return <H2>{children}</H2>;
}

SubTitle.propTypes = {
  children: PropTypes.node,
};

export default SubTitle;

const H2 = styled.h2`
  margin-top: 32px;
  margin-bottom: 40px;
  font-size: 24px;
  color: #91dcfc;
  padding-left: 15px;
`;
