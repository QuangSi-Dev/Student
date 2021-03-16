import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  // handleLogin = () => {
  //   this.setState({
  //     isLogin: true,
  //   });
  // };

  handleLogin() {
    this.setState({
      isLogin: true,
    });
  }

  showInfo = () => {
    return this.state.isLogin ? (
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
        <h3>*State</h3>
        {this.showInfo()}
      </div>
    );
  }
}
