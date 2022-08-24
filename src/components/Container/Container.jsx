import styled from 'styled-components';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <Box>{children}</Box>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

const Box = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1400px;
  height: 100vh;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
`;
