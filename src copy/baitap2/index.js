import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import WhatWeDo from "./what-we-do";
import Contact from "./contact";
import ListCard from "./list-card";
import Footer from "./footer";

function Baitap2() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <WhatWeDo />
          <Contact />
        </div>
      </div>
      <ListCard />
      <Footer />
    </>
  );
}

export default Baitap2;
