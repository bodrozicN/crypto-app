import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


:root {
  --blue: #2300fa;
  --grey-primary: #343438;
  --grey-secondary: #f5f5f7;
  --red-light-theme: #dd0000;
  --green-light-theme: #00a137;
  --grey-tertiary: #292929;
  --grey-quaternary: #121212;
  --red-dark-theme: #ff4747;
  --green-dark-theme: #20ff6c;
  --pink: #df1c9d;

  --desktop-width: 128rem;
}
 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-weight: 600;
}

`;
