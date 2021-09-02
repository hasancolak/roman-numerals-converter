import React from "react";
import "./App.scss";
import Converter from "./components/converter/converter";

function App() {
  return (
    <div className="App">
      <Converter converter="roman" />
      <Converter converter="integer" />
    </div>
  );
}

export default App;
