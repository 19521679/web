import React, { Component } from "react";
import "reactjs-popup/dist/index.css";
import Modal from "react-modal";
import * as customerApi from "../../apis/customer";
import * as myToast from "../../../Common/helper/toastHelper";
import "./style.css";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenkhachhang: "",
      email: "",
      sodienthoai: "",
      diachi: "",
      cccd: "",
      ngaysinh: new Date(),
      image: undefined,

      loaikhachhang: "",
      progress: 0,
    };
  }
  submitHandler = () => {
    const fd = new FormData();
    fd.append("tenkhachhang", this.state.tenkhachhang);
    fd.append("email", this.state.email);
    fd.append("sodienthoai", this.state.sodienthoai);
    fd.append("diachi", this.state.diachi);

    fd.append("cccd", this.state.cccd);
    fd.append(
      "ngaysinh",
      new Date(this.state.ngaysinh).toISOString().split("T")[0]
    );
    fd.append("image", this.state.image);
    fd.append("loaikhachhang", this.state.loaikhachhang);

    customerApi
      .addCustomer(fd, this.setProgress.bind(this))
      .then((success) => {
        this.props.add(success.data.value);
        this.props.closeModal();
      })
      .catch((error) => {
        myToast.toastError("Thêm mới thất bại");
        console.error(error);
      });
  };

  setProgress(percent) {
    if (percent === 100) {
      myToast.toastSucces("Thêm mới thành công");
      this.props.closeModal();
    }
    this.setState({ progress: percent });
  }

  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div class="add-item-modal khachhangmodal" role="document">
          <div class="">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Thêm mới khách hàng
              </h5>
            </div>

            <div className="form-main-add-edit">
              <div className="row mb-3">
                <span className="text-secondary text-xs font-weight-bold">
                  <img
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                    src={
                      this.state.image !== undefined ?
                      URL.createObjectURL(this.state.image):""
                    }
                  ></img>
                </span>
              </div>
              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Image</div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="image"
                    type="file"
                    placeholder=""
                    ref={(fileInput) => (this.fileInput = fileInput)}
                    onChange={(e) => {
                      this.setState({ image: e.target.files[0] });
                    }}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Tên khachhang
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border "
                    id="tenkhachhang"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ tenkhachhang: e.target.value });
                    }}
                    value={this.state.tenkhachhang}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Email</div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="email"
                    type="email"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                    value={this.state.email}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Số điện thoại
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="sodienthoai"
                    type="tel"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ sodienthoai: e.target.value });
                    }}
                    value={this.state.sodienthoai}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Địa chỉ
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="diachi"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ diachi: e.target.value });
                    }}
                    value={this.state.diachi}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">CCCD</div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="cccd"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ cccd: e.target.value });
                    }}
                    value={this.state.cccd}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Ngày sinh
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    type="date"
                    id="ngaysinh"
                    name="trip-start"
                    onChange={(e) => {
                      this.setState({
                        ngaysinh: new Date(e.target.value),
                      });
                    }}
                    value={this.state.ngaysinh.toISOString().split("T")[0]}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Loại khách hàng
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <select
                    className="form-control border"
                    id="loaikhachhang"
                    name="loaikhachhang"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ loaikhachhang: e.target.value });
                    }}
                    value={this.state.loaikhachhang}
                  >
                    <option value="thanhvien">Thành viên</option>
                    <option value="thuong">Thường</option>
                  </select>
                </div>
              </div>
            </div>

            <hr></hr>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: this.state.progress + "%" }}
              ></div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.props.closeModal}
              >
                Đóng
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.submitHandler.bind(this)}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
