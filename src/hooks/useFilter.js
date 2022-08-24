import useInput from 'hooks/useInput';

const useFilter = contacts => {
  const { value, handlerChangeInput } = useInput('');

  const getFilterContacts = () => {
    return contacts.filter(element =>
      element.name.toLowerCase().includes(value.toLowerCase().trim()),
    );
  };

  const filteredContacts = value ? getFilterContacts() : contacts;

  return { value, handlerChangeInput, filteredContacts };
};

export default useFilter;
