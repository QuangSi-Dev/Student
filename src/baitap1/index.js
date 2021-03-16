import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

class Baitap1 extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </>
    );
  }
}

export default Baitap1;
