import { useState } from 'react';

const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const handlerChangeInput = ({ target }) => {
    setValue(target.value);
  };

  return { value, setValue, handlerChangeInput };
};

export default useInput;
