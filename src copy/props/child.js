import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uesername: "Nguyen",
    };
  }

  render() {
    return (
      <div>
        <h3>*Child</h3>
        <p>Username: {this.state.uesername}</p>
      </div>
    );
  }
}
