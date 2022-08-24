import styled from 'styled-components';
import PropTypes from 'prop-types';

function Input({ value, placeholder, required, handlerChangeInput, use }) {
  return (
    <InputTag
      autoComplete="off"
      type="text"
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={handlerChangeInput}
      use={use}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  handlerChangeInput: PropTypes.func,
  use: PropTypes.string,
};

const InputTag = styled.input`
  width: 100%;
  padding: ${({ use }) =>
    use === 'formSend' ? '15px 55px 15px 15px' : '12px 12px 12px 38px'};
  font-family: ${({ use }) =>
    use === 'formSend' ? 'inherit' : 'Lato, sans-serif'};
  font-size: ${({ use }) => (use === 'formSend' ? '20px' : '18px')};
  color: #3c4252;
  letter-spacing: ${({ use }) => (use === 'formSend' ? 'normal' : '-0.5px')};
  border: 1px solid #dcdcdc;
  border-radius: 22px;
  background-color: #fafafa;

  @media screen and (min-width: 450px) {
    padding: ${({ use }) =>
      use === 'formSend' ? '20px 60px 20px 20px' : '12px 12px 12px 38px'};
  }

  ::placeholder {
    color: #939393;
    letter-spacing: ${({ use }) => (use === 'formSend' ? 'normal' : '-0.5px')};
  }

  :focus {
    border-color: #3c4252;
    outline: none;
  }
`;

export default Input;
