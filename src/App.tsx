import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style";
import { useTheme } from "./hooks";
import "./style/style.css";
import { Header } from "./components/organisms";

const Home = lazy(() => import("./components/pages/home"));
const Coin = lazy(() => import("./components/pages/coin"));
const Portfolio = lazy(() => import("./components/pages/portfolio"));
const Error = lazy(() => import("./components/pages/error"));
const SuperAdmin = lazy(() => import("./components/pages/superAdmin"));

function App() {
  const { isDark } = useTheme();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ isDark }}>
        <Suspense fallback={<p>Loading...</p>}>
          <Router>
            <Header />
            <Link to="/superAdmin">superadmin</Link>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="coin/:uuid" element={<Coin />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="superAdmin" element={<SuperAdmin />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
