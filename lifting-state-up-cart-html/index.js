import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
    };
  }
  handleGetDetailProduct = (product) => {
    this.setState({
      detailProduct: product,
    });
  };

  render() {
    const { detailProduct } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button className="btn btn-danger" data-toggle="modal" data-target="#modelId">
            Giỏ hàng (0)
          </button>
        </div>
        <DanhSachSanPham listProduct={this.state.listProduct} getDetailProduct={this.handleGetDetailProduct} />
        <Modal />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src="./img/vsphone.jpg" alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.camera}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>Chính 48 MP & Phụ 8 MP, 5 MP</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>4 GB</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>6 GB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
