import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style";
import { useTheme } from "./hooks";
import "./style/style.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  const { isDark } = useTheme();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ isDark }}>
        <Suspense fallback={<p>Loading...</p>}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
