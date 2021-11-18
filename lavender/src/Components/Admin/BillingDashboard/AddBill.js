import React, { Component } from "react";
import Modal from "../MyModal/index";
import * as hoadonApi from "../../apis/billing";
import * as myToast from "../../../Common/helper/toastHelper";
import * as detailBill from "../../apis/detailBill";
export default class AddBill extends Component {
  constructor(props) {
    super(props);
    this.state={
      sohoadon:this.props.bill!==undefined ? this.props.bill.sohoadon :0,
      makhachhang:this.props.bill!==undefined ? this.props.bill.makhachhang :0,
      makhuyenmai:this.props.bill!==undefined ? this.props.bill.makhuyenmai :0,
      ngayhoadon: this.props.bill!==undefined ? this.props.bill.ngayhoadon :new Date(),
      manhanvien:this.props.bill!==undefined ? this.props.bill.manhanvien :0,
      tongtien:this.props.bill!==undefined ? this.props.bill.tongtien :0,
      chitiethoadon: [],
    };
  }
  themChiTietHoaDon() {
    let newchitiethoadon = this.state.chitiethoadon;
    newchitiethoadon.push({imei:0, tien:0});
    this.setState({ chitiethoadon: newchitiethoadon });
  }
  async componentDidMount() {
    if (this.props.bill !== undefined)
      await detailBill
        .detailByBillId(this.props.bill.sohoadon)
        .then((success) => {
          this.setState({ chitiethoadon: success.data.value.$values });
        })
        .catch((error) => {});
  }
  async saveChanges() {
    let hoadon = {
      sohoadon: parseInt(this.state.sohoadon),
      makhachhang: parseInt(this.state.makhachhang),
      makhuyenmai: parseInt(this.state.makhuyenmai),
      ngayhoadon: Date.parse(this.state.ngayhoadon),
      manhanvien: parseInt(this.state.manhanvien),
      tongtien: parseInt(this.state.tongtien),
      chitiethoadon: this.state.chitiethoadon,
    };

      await hoadonApi
        .addOrUpdateBilling(hoadon)
        .then((success) => {
          if (success.status === 200) {
            myToast.toastSucces("Thêm mới hoá đơn thành công");
            this.props.handleSave();
          } else myToast.toastError("Thêm mới thất bại");
        })
        .catch((error) => {
          myToast.toastError("Thêm mới thất bại");
        });
  
    // this.props.handleSave();
  }
  render() {
    return (
      <Modal
        handleClose={this.props.handleClose}
        handleSave={this.saveChanges.bind(this)}
        title={"Hoá đơn"}
      >
        <div className="row mb-1">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Số hoá đơn</div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
          <input
              className="form-control border "
              id="sohoadon"
              placeholder=""
              disabled
              
              value={
                this.state.sohoadon
              }
            ></input>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            Mã khách hàng
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
            <input
              className="form-control border "
              id="makhachhang"
              placeholder=""
              onChange={((e)=>{this.setState({makhachhang:e.target.value})}).bind(this)}
              value={
                this.state.makhachhang
              }
            ></input>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            Mã khuyến mãi
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
            <input
              className="form-control border"
              id="makhuyenmai"
              placeholder=""
              onChange={((e)=>{this.setState({makhuyenmai:e.target.value})}).bind(this)}
              value={
                this.state.makhuyenmai
              }
            ></input>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            Ngày hoá đơn
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
            <input
              className="form-control border"
              type="date"
              id="ngayhoadon"
              name="trip-start"
              onChange={((e)=>{this.setState({ngayhoadon:e.target.value})}).bind(this)}
              value={
                this.state.ngayhoadon
              }
            ></input>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            Mã nhân viên
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
            <input
              className="form-control border"
              id="manhanvien"
              placeholder=""
              onChange={((e)=>{this.setState({manhanvien:e.target.value})}).bind(this)}
              value={
                this.state.manhanvien
              }
            ></input>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Tổng tiền</div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
            <input
              className="form-control border"
              id="tongtien"
              placeholder=""
              onChange={((e)=>{this.setState({tongtien:e.target.value})}).bind(this)}
              value={this.state.tongtien}
            ></input>
          </div>
        </div>
        <hr></hr>

        {function () {
          let result = [];
          for (var i = 0; i < this.state.chitiethoadon.length; i++) {
            result.push(
              <div>
                <div className="row mb-1">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    IMEI
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <input
                      className="form-control border"
                      id="imei"
                      name="imei"
                      placeholder=""
                      onChange={((i, e)=>{
                        let temp = [...this.state.chitiethoadon];
                        temp[i].imei=e.target.value;
                        this.setState({chitiethoadon:temp})
                      }).bind(this, i)}
                      value={this.state.chitiethoadon[i].imei}
                    ></input>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Tiền
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <input
                      className="form-control border"
                      id="tien"
                      name="tien"
                      placeholder=""
                      onChange={((i, e)=>{
                        let temp = [...this.state.chitiethoadon];
                        temp[i].tien=e.target.value;
                        this.setState({chitiethoadon:temp})
                      }).bind(this, i)}
                      value={this.state.chitiethoadon[i].tien}
                    ></input>
                  </div>
                </div>
                <hr></hr>
              </div>
            );
          }
          return result;
        }.bind(this)()}

        <div className="row mb-1">
          <button
            className="btn btn-info"
            onClick={this.themChiTietHoaDon.bind(this)}
          >
            Thêm chi tiết hoá đơn
          </button>
        </div>
      </Modal>
    );
  }
}
