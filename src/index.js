import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

/*
// JSX
const App = () => (
  <div>
    <p>tekstas</p>
  </div>
);

// https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(<App />, document.querySelector("#react-app"));

// console.log({ React, ReactDOM });
*/

import { App } from "./components/App.js";

ReactDOM.render(<App />, document.querySelector("#react-app"));
