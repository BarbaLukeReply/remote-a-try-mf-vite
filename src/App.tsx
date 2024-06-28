import React from 'react';
import "./App.css";
import Page1 from "./components/Pages1";

interface AppProps {
  color: boolean; // specify the type of color here
}

const App: React.FC<AppProps> = ({ color=false }) => {
  return (
    <Page1 color={color} />
  );
}

export default App;