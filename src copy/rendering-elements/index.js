import React, { Component } from "react";

export default class RenderingElements extends Component {
  username = "Nguyen";
  lop = "BC 03";

  getInfo = () => {
    return (
      <p>
        Username: {this.username} - Lop: {this.lop}
      </p>
    );
  };

  render() {
    return (
      <div>
        <h3>*RenderingElements</h3>
        {this.getInfo()}
      </div>
    );
  }
}
