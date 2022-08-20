import { useState, useEffect } from 'react';

const useLocalStorage = defaultValue => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? defaultValue;
  });
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
