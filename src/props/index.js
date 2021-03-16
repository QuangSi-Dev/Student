import React, { Component } from "react";
import Child from "./child";

import ChildFunction from "./childFunction";
import Children from "./children";

export default class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uesername: "hanh",
    };
  }
  handleChangeUsername = () => {
    this.setState({
      uesername: "Vy",
    });
  };

  handleGetResetUsername = (resetUsername) => {
    this.setState({
      username: resetUsername,
    });
  };

  render() {
    return (
      <div>
        <h3>*Props</h3>
        <p>Username: {this.state.uesername}</p>
        <button className="btn btn-success" onClick={this.handleChangeUsername}>
          Change username
        </button>

        <Child data={this.state.uesername} getResetUsername={this.handleGetResetUsername} />
        <ChildFunction uesername={this.state.uesername} />
        <Children>
          <div>
            <p>Demo Children</p>
            <p>Lorem</p>
          </div>
        </Children>
      </div>
    );
  }
}
