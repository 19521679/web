import React, { Component } from "react";
import "reactjs-popup/dist/index.css";
import Modal from "react-modal";
import * as productApi from "../../apis/product";
import * as myToast from "../../../Common/helper/toastHelper";
import "./style.css";
import FindTrademarkModal from "./FindTrademarkModal";

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
      tensanpham: "",
      maloai: undefined,
      mathuonghieu: undefined,
      soluongton: undefined,
      mota: "",
      image: undefined,
      thoidiemramat: new Date(),
      dongia: undefined,
      progress: 0,
      showModal:false
    };
  }
  submitHandler = () => {
    const fd = new FormData();
    fd.append("tensanpham", this.state.tensanpham);
    fd.append("maloai", this.state.maloai);

    fd.append("mathuonghieu", this.state.mathuonghieu);
    fd.append("soluongton", this.state.soluongton);
    fd.append("mota", this.state.mota);
    fd.append("image", this.state.image);
    fd.append(
      "thoidiemramat",
      new Date(this.state.thoidiemramat).toISOString().split("T")[0]
    );
    fd.append("dongia", this.state.dongia);

    productApi
      .addProduct(fd, this.setProgress.bind(this))
      .then((success) => {
        this.props.addProduct(success.data.value);
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
  
  
  chooseFunction(trademark){
    this.setState({mathuonghieu: trademark.mathuonghieu})
  }


  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
           <FindTrademarkModal
        showModal={this.state.showModal}
        closeModal={() => this.setState({showModal: false})}
        chooseFunction={this.chooseFunction.bind(this)}
      ></FindTrademarkModal>
        <div class="add-item-modal" role="document">
          <div class="">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Thêm mới sản phẩm
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
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Tên sản phẩm
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border "
                    id="tensanpham"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ tensanpham: e.target.value });
                    }}
                    value={this.state.tensanpham}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Mã loại
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="maloai"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ maloai: e.target.value });
                    }}
                    value={this.state.maloai}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Mã thương hiệu
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="mathuonghieu"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ mathuonghieu: e.target.value });
                    }}
                    value={this.state.mathuonghieu}
                  ></input>
                   <div className="mr-1" onClick={(() => this.setState({showModal: true}))}>
                  <div onClick={(() => this.setState({showModal:true}))}>
                  <i class="bi bi-arrow-right-circle "></i>
                  </div>
                </div>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Số lượng tồn
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="soluongton"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ soluongton: e.target.value });
                    }}
                    value={this.state.soluongton}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Image</div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="soluongton"
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
                  Thời điểm ra mắt
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    type="date"
                    id="ngayhoadon"
                    name="trip-start"
                    onChange={(e) => {
                      this.setState({
                        thoidiemramat: new Date(e.target.value),
                      });
                    }}
                    value={this.state.thoidiemramat.toISOString().split("T")[0]}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  Đơn giá
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                  <input
                    className="form-control border"
                    id="dongia"
                    placeholder=""
                    onChange={(e) => {
                      this.setState({ dongia: e.target.value });
                    }}
                    value={this.state.dongia}
                  ></input>
                </div>
              </div>

              <div className="row mb-1">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Mô tả</div>
              </div>
              <div className="row mb-1">
                <textarea
                  class="form-control border"
                  id="mota"
                  rows="30"
                  onChange={(e) => {
                    this.setState({ mota: e.target.value });
                  }}
                  value={this.state.mota}
                ></textarea>
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
