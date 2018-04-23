import React from "react";
import LevelThree from "./LevelThree";

export default class LevelTwo extends React.Component {
  render() {
    return (
      <div className="level-two">
        <h2>hello from level two!</h2>
        <LevelThree />
      </div>
    );
  }
}
