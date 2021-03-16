import React, { Component } from "react";

export default class ExampleHandlingEvent extends Component {
  isLogin = false;

  handleLogin = () => {
    this.isLogin = true;
    console.log(this.isLogin);
  };

  showInfo = () => {
    return this.isLogin ? (
      <h1>Hello Cybersoft</h1>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  };

  render() {
    return (
      <div>
        <h3>*ExampleHandlingEvent</h3>
        {this.showInfo()}
      </div>
    );
  }
}
