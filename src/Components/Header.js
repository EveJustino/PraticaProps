import React, { Component } from "react";
import image from "../Image/rosto.png";
import { Photo } from "./Style";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.nome}</h2>
        <h3>{this.props.idade}</h3>
        <h4>{this.props.estudo}</h4>
        <Photo src={image} alt="rosto" />
      </div>
    );
  }
}
