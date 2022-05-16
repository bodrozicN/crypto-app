import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style";

const Home = lazy(() => import("./components/pages/home"));
const Coin = lazy(() => import("./components/pages/coin"));
const Portfolio = lazy(() => import("./components/pages/portfolio"));
const Error = lazy(() => import("./components/pages/error"));

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ isDark: false }}>
        <Suspense fallback={<p>Loading...</p>}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coin/:id" element={<Coin />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
