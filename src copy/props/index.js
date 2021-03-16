import React, { Component } from "react";
import Child from "./child";
export default class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uesername: "Nguyen",
    };
  }
  render() {
    return (
      <div>
        <h3>*Props</h3>
        <p>Username: {this.state.uesername}</p>
      </div>
    );
  }
}
