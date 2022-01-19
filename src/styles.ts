import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export type Theme = typeof lightTheme;

export const lightWeb = {
  background: {
    primary: '#FFFAFA',
  },
};
export const darkTheme = {
  background: {
    primary: '#888',
  },
};

export const lightTheme = { colors: lightWeb };

const Styles = createGlobalStyle`
  ${normalize}

  /* html {
    height: 100%;
  } */
  body {
    /* height: 100%; */
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: ${({ theme }) => theme.colors.background.primary};
  }
  #root {
  }
`;

export default Styles;
