import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter";
import Buttons from "./component/Buttons";
import React, { useState } from "react";

function App() {
  const [passData, setPassData] = useState("0");
  const inputHandler = (arg) => {
    setPassData(arg);
  };
  return (
    <div>
      <Counter onDisplay={passData} />
      <Buttons onInputHandler={inputHandler} />
    </div>
  );
}

export default App;
