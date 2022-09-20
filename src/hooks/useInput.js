import { useState } from 'react';

const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const handlerInput = ({ target }) => {
    setValue(target.value);
  };

  return { value, setValue, handlerInput };
};

export default useInput;
