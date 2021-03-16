import React from "react";
import CardItem from "./card-item";

export default function ListCard() {
  return (
    <div className="container">
      <div className="row">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}
