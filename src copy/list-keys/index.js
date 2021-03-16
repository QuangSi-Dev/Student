import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [
        { id: 1, name: "Iphone", price: 1232131 },
        { id: 2, name: "HTC", price: 1232131 },
        { id: 3, name: "Nokia", price: 1232131 },
      ],
    };
  }

  renderTable = () => {
    const { listProduct } = this.state;
    return listProduct.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>*ListKeys</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
