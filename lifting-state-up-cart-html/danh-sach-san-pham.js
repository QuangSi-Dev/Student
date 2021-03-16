import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    const { listProduct } = this.props; /**tach du lieu es6 */
    return listProduct.map((item) => {
      return <SanPham key={iterm.maSP} product={item}
      getDetailProduct={this.props.getDetailProduct} />;
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <SanPham />
          <SanPham />
          <SanPham /> */}
          {this.renderListProduct()}
        </div>
      </div>
    );
  }
}
