import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import Home from "./home";
const InfiniteHorizontalScrollAnimation = lazy(() =>
  import("./infinite-horizontal-scroll-animation")
);

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="infinite-horizontal-scroll-animation"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <InfiniteHorizontalScrollAnimation />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
