import styled from 'styled-components';
import { MdOutlineSend } from 'react-icons/md';

function ButtonSend() {
  return (
    <Button type="submit" aria-label="sending a message">
      <MdOutlineSend />
    </Button>
  );
}
export default ButtonSend;

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #939393;
  background-color: transparent;
  transform: translateY(-50%);

  @media screen and (min-width: 450px) {
    right: 45px;
  }

  :focus-visible {
    border-radius: 10px;
    outline: 1px solid #3c4252;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
