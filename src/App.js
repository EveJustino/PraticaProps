import React, { Component } from "react";
import Header from "./Components/Header.js";

export default class Props extends Component {
  render() {
    return (
      <div>
        <Header nome="Larissa" idade="27" estudo="React" />
      </div>
    );
  }
}
