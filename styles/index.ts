import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const { BLACK } = colors;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${BLACK};
  }
`;

export default GlobalStyle;
