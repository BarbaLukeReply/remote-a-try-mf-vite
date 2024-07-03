import React from "react";
import "./App.css";
import Page1 from "./components/Pages1";
import Page1_1 from "./components/Pages1_1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

interface AppProps {
  color: boolean; // specify the type of color here
  changePage: boolean; // specify the type of changePage here
}

const App: React.FC<AppProps> = ({ color = false, changePage = false }) => {

  return (
    <Router>
      <Routes>
        <Route path="/page1" element={<Page1 color={color} changePage={changePage} />} />
        <Route path="/page1/1_1" element={<Page1_1 color={color} changePage={changePage} />} />
      </Routes>
    </Router>
  );
};

export default App;
