import { useState } from 'react';

import styled from 'styled-components';
import HeaderMainPanel from 'components/HeaderMainPanel';
import ContactsMainPanel from 'components/ContactsMainPanel';

function MainPanel({ contacts }) {
  const [filter, setFilter] = useState('');

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilterContacts = () => {
    return contacts.filter(element =>
      element.name.toLowerCase().includes(filter.toLowerCase().trim()),
    );
  };

  const contactsList = filter ? getFilterContacts() : contacts;

  return (
    <Div>
      <HeaderMainPanel
        filter={filter}
        handleChangeFilter={handleChangeFilter}
      />
      <ContactsMainPanel contactsList={contactsList} />
    </Div>
  );
}

export default MainPanel;

const Div = styled.div`
  border-right: 1px solid #dcdcdc;
`;
