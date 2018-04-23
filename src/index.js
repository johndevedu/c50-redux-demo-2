import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import LevelOne from "./LevelOne";
import "./style.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <LevelOne />
  </div>
);

render(<App />, document.getElementById("root"));
