import React, { Component } from "react";

export default class HandlingEvent extends Component {
  handleClick = () => {
    console.log(123);
  };

  handleClickParams = (name, lop) => {
    console.log(name, lop);
  };

  render() {
    return (
      <div>
        <h3>*HandlingEvent</h3>
        <button className="btn btn-success" onClick={this.handleClick}>
          Click
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handleClickParams("Nguyen", "BC 03");
          }}
        >
          Click Params
        </button>
      </div>
    );
  }
}
