import React, { Component } from "react";
import Sanpham from "./san-pham";

export default class SanPham extends Component {
  handleDetail =()=>{
this.props.getDetailProduct(this.props.product)
  }
  const {product}= this.props;
  render() {
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">VinSmart Live</h4>
            <button className="btn btn-success" onClick={this.handleDetail}>Chi tiết</button>
            <button className="btn btn-danger">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
