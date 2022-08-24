import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  padding: 0;
  border: 0;
}

*,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

body {
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  font-weight: 400;
}

button,
input,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}

ul {
  list-style: none;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyles;
