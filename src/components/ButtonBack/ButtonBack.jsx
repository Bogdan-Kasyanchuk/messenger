import styled from 'styled-components';
import { GoArrowLeft } from 'react-icons/go';
import PropTypes from 'prop-types';

function ButtonBack({ hundlerButton }) {
  return (
    <Button type="button" aria-label="back" onClick={hundlerButton}>
      <GoArrowLeft />
    </Button>
  );
}

ButtonBack.propTypes = {
  children: PropTypes.func,
};

export default ButtonBack;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  color: #3c4252;
  background-color: transparent;

  :focus-visible {
    border-radius: 10px;
    outline: 1px solid #3c4252;
  }

  svg {
    width: 31px;
    height: 31px;
    pointer-events: none;
  }
`;
