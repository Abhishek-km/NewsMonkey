import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar color="Red" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setProgress} key="general" pageSize={10} category="general" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={setProgress} key="business" pageSize={10} category="business" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setProgress} key="entertainment" pageSize={10} category="entertainment" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/general"
            element={<News setProgress={setProgress} key="general" pageSize={10} category="general" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={setProgress} key="health" pageSize={10} category="health" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={setProgress} key="science" pageSize={10} category="science" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={setProgress} key="sports" pageSize={10} category="sports" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={setProgress} key="technology" pageSize={10} category="technology" apiKey={apiKey} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
