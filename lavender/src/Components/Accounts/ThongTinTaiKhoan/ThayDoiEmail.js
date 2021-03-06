import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as khachhangApi from "../../apis/customer";
import * as myToast from "../../../Common/helper/toastHelper";

class ThayDoiEmail extends Component {
  state = { email: "" };
  async componentDidMount() {
    await khachhangApi
      .findCustomerByCustomerId(this.props.customer.makhachhang)
      .then((success) => {
        if (success.status === 200) {
          this.setState({ email: success.data.value.email });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  luuThayDoi() {
    khachhangApi
      .thayDoiEmail({
        makhachhang: this.props.customer.makhachhang,
        email: this.state.email,
      })
      .then((success) => {
        if (success.status === 200) {
          myToast.toastSucces("Thay đổi email thành công");
        } else {
          myToast.toastError("Thay đổi email thất bại");
        }
      })
      .catch((error) => {
        myToast.toastError("Thay đổi email thất bại");
        console.error(error);
      });
  }
  render() {
    return (
      <section className="styles__StyleInfoPage-sc-1ylk51y-0 DWfPE">
        <div className="form">
          <div className="form-control border rounded">
            <label className="input-label">Email</label>
            <div>
              <div className="styles__StyledInput-sc-s5c7xj-5 hisWEc">
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                  className="icon-left"
                  alt=""
                />
                <input
                  name="phone"
                  maxLength={200}
                  placeholder="Nhập địa chỉ email"
                  type="search"
                  className="input with-icon-left "
                  onChange={(e) => this.setState({ email: e.target.value })}
                  defaultValue={this.state.email}
                />
              </div>
              <div className="hint-message">&nbsp;&nbsp;</div>
            </div>
          </div>
          <button
            type=""
            className="styles__StyledBtnSubmit-sc-s5c7xj-3 cqEaiM"
            onClick={this.luuThayDoi.bind(this)}
          >
            Lưu thay đổi
          </button>
        </div>
      </section>
    );
  }
}
ThayDoiEmail.propTypes = {
  customer: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    customer: state.login.customer,
  };
};
export default connect(mapStateToProps)(ThayDoiEmail);
