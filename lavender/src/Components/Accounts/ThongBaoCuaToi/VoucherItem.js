import React, { Component } from "react";
import * as voucherApi from "../../apis/voucher";
import * as myVoucherApi from "../../apis/myvoucher";
import * as myToast from "../../../Common/helper/toastHelper";

export default class VoucherItem extends Component {
  state = { voucher: {} };
  componentDidMount() {
    voucherApi
      .findVoucherById(this.props.myvoucher.makhuyenmai)
      .then((success) => {
        if (success.status === 200) {
          this.setState({ voucher: success.data.value });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  xoaVoucherCuatoi(){
    myVoucherApi.deleteMyVoucher(this.props.makhachhang,this.props.myvoucher.makhuyenmai)
    .then((success) => {
        if (success.status === 200) {
            myToast.toastSucces("Đã xoá voucher")
            this.props.deleteMyVoucher();
        }
    })
    .catch((error) => {
        console.error(error);
    })
  }
  render() {
    return (
      <div className="styles__StyledItem-sc-1ghyfo6-2 erXBTT item">
        <div className="date">
          {(() => {
            var dateObj = new Date(this.props.myvoucher.ngaythem);
            const day = String(dateObj.getDate()).padStart(2, "0");
            const month = dateObj.getMonth() + 1;
            const year = dateObj.getFullYear();
            const output = day  + "/" + month + "/" + year;
            return output;
          })()}
        </div>
        <div className="icon">
          <div className="circle c-02b7f1">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z" />
            </svg>
          </div>
        </div>
        <div className="content">Giảm giá {(this.state.voucher.tilekhuyenmai*100).toFixed(0)}%
            Áp dụng cho : {this.state.voucher.dieukien}
            <div>Từ ngày{"  "}  {(() => {
            var dateObj = new Date(this.state.voucher.ngaybatdau);
            const day = String(dateObj.getDate()).padStart(2, "0");
            const month = dateObj.getMonth() + 1;
            const year = dateObj.getFullYear();
            const output = day  + "/" + month + "/" + year;
            return output;
          })()}</div>
          <div>Đến ngày  {(() => {
            var dateObj = new Date(this.state.voucher.ngayketthuc);
            const day = String(dateObj.getDate()).padStart(2, "0");
            const month = dateObj.getMonth() + 1;
            const year = dateObj.getFullYear();
            const output = day  + "/" + month + "/" + year;
            return output;
          })()}</div>
        </div>
        <button className="delete" onClick={this.xoaVoucherCuatoi.bind(this)}>Xóa</button>
      </div>
    );
  }
}
