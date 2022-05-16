import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --blue-primary: 35, 0, 250;
  --blue-secondary: rgb(var(--blue-primary), 0.8);
  --white: #fff;
  //light theme colors
  --grey-light-1: #666666;
  --grey-light-2: 52,52,56;
  --grey-light-3: rgb(var(--grey-2), 0.5);
  --grey-light-4: #f5f5f7
  --red-light-theme: #dd0000;
  --green-light-theme: #00a137;
  //dark theme colors
  --grey-dark-1: #211f2a;
  --grey-dark-2: #373640;
  --grey-dark-3: #555555;
  --red-dark-theme: #ff4747;
  --green-dark-theme: #20ff6c;

  --screen-width-desktop: 128rem;
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
  font-family: Gilory, sans-serif;
}

`;
