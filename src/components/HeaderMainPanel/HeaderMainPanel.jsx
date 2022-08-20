import styled from 'styled-components';
import User from 'components/User';
import FilterContacts from 'components/FilterContacts';

function HeaderMainPanel({ filter, handleChangeFilter }) {
  return (
    <Div>
      <User />
      <FilterContacts filter={filter} handleChangeFilter={handleChangeFilter} />
    </Div>
  );
}

export default HeaderMainPanel;

const Div = styled.div`
  padding: 15px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #dcdcdc;
`;
