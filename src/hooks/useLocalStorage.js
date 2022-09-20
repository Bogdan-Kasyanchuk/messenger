import { useState, useEffect } from 'react';

const useLocalStorage = defaultValue => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem('messages')) ?? defaultValue,
  );

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
