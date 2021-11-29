import React, { Component } from "react";
import * as imageApi from "../../apis/image";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export default class Item extends Component {
  state = { giamoi: 0, showModal: 0 };
  componentDidMount() {
  }
  closeModal() {
    this.setState({ showModal: 0 });
  }
  render() {
    return (
      <tr>
        <EditModal
          showModal={this.state.showModal === 1 && true}
          closeModal={this.closeModal.bind(this)}
          customer={this.props.customer}
          edit={this.props.edit.bind(this)}
        ></EditModal>
        <DeleteModal
          showModal={this.state.showModal === 2 && true}
          customer={this.props.customer}
          closeModal={this.closeModal.bind(this)}
          delete={this.props.delete.bind(this)}
        ></DeleteModal>

        <td className="align-middle text-center">
          <span className="text-secondary text-xs font-weight-bold">
          <img
              alt="img"
              style={{ width: "80px", height: "80px" }}
              src= {imageApi.image(this.props.customer.image, this.props.customer.makhachhang)}
            ></img>
          </span>
        </td>

        <td className="align-middle text-center">
          <span className="text-secondary text-xs font-weight-bold">
            {this.props.customer.tenkhachhang}
          </span>
        </td>
        <td className="align-middle text-center">
          <span className="text-secondary text-xs font-weight-bold">
            {this.props.customer.email}
          </span>
        </td>
        <td className="align-middle text-center">
          <span className="text-secondary text-xs font-weight-bold">
            {this.props.customer.sodienthoai}
          </span>
        </td>
        <td className="align-middle text-center">
          <span className="text-secondary text-xs font-weight-bold">
            {this.props.customer.diachi}
          </span>
        </td>
        <td className="align-middle text-center">
          <span className="text-secondary text-xs font-weight-bold">
            {(() => {
              var dateObj = new Date(this.props.customer.ngaysinh);
              const day = String(dateObj.getDate()).padStart(2, "0");
              const month = dateObj.getMonth() + 1;
              const year = dateObj.getFullYear();
              const output = day + "/" + month + "/" + year;
              return output;
            })()}
          </span>
        </td>
        {this.props.customer.loaikhachhang === "Thành viên" ? (
          <td className="align-middle text-center text-sm">
            <span className="badge badge-sm bg-gradient-success">
              Thành viên
            </span>
          </td>
        ) : (
          <td className="align-middle text-center text-sm">
            <span className="badge badge-sm bg-gradient-secondary">Thường</span>
          </td>
        )}
        <td className="align-middle">
          <div
            className="btn btn-link text-dark px-3 mb-0"
            onClick={() => this.setState({ showModal: 1 })}
          >
            <i class="bi bi-pencil-square"></i>
            {"  "}Sửa
          </div>
          <div
            className="btn btn-link text-danger px-3 mb-0 " style={{ position: 'relative', zIndex: '0' }}
            onClick={() => this.setState({ showModal: 2 })}
          >
            <i class="bi bi-trash"></i>
            {"  "}Xoá
          </div>
        </td>
      </tr>
    );
  }
}
