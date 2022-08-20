import PropTypes from 'prop-types';
import styled from 'styled-components';

function Container({ children }) {
  return <Div>{children}</Div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1400px;
`;
