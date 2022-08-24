import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import ButtonSend from 'components/ButtonSend';
import useInput from 'hooks/useInput';

function FormSendMessange({ handlerMessage }) {
  const { value, setValue, handlerChangeInput } = useInput('');

  const sendMessange = e => {
    e.preventDefault();
    handlerMessage(value);
    setValue('');
  };

  return (
    <Form onSubmit={sendMessange}>
      <Input
        value={value}
        placeholder="Type your message"
        required
        handlerChangeInput={handlerChangeInput}
        use="formSend"
      />
      <ButtonSend />
    </Form>
  );
}

FormSendMessange.propTypes = {
  handlerMessage: PropTypes.func,
};

const Form = styled.form`
  position: relative;
  padding: 15px;
  background-color: #f5f5f5;

  @media screen and (min-width: 450px) {
    padding: 30px;
  }
`;

export default FormSendMessange;
