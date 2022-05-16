import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/pages/home"));
const Coin = lazy(() => import("./components/pages/coin"));
const Portfolio = lazy(() => import("./components/pages/portfolio"));
const Error = lazy(() => import("./components/pages/error"));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Link to="/portfolio">aj</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
