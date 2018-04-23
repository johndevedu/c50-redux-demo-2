import React from "react";
import LevelTwo from "./LevelTwo";

export default class LevelOne extends React.Component {
  render() {
    return (
      <div className="level-one">
        <h1>hello from level one!</h1>
        <LevelTwo />
      </div>
    );
  }
}
