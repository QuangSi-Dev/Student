import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
  }
  handleReset = () => {
    const resetUser = "Nguyen";
    this.props.getResetUsername(resetUser);
  };

  render() {
    return (
      <div>
        <h3>*Child</h3>
        <p>Username: {this.props.data}</p>
        <button className="btn btn-info" onClick={this.handleReset}>
          Resetusername
        </button>
      </div>
    );
  }
}
