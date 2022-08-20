import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

function FilterContacts({ filter, handleChangeFilter }) {
  return (
    <Label>
      <Input
        autoComplete="off"
        type="text"
        name="filter"
        value={filter}
        placeholder="Search or start new chat"
        onChange={handleChangeFilter}
      />
      <AiOutlineSearch />
    </Label>
  );
}

const Label = styled.label`
  position: relative;
  display: block;
  margin-top: 32px;

  svg {
    fill: #939393;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 12px 12px 38px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #303030;
  background-color: #fafafa;
  border: 1px solid #dcdcdc;
  border-radius: 22px;

  ::placeholder {
    color: #939393;
  }

  :focus {
    border-color: #3c4252;
    outline: none;
  }
`;

export default FilterContacts;
