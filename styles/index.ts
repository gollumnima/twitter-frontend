import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

console.log(colors,'colors')

const { BLACK } = colors;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: BLACK;
  }
`;

export default GlobalStyle;
