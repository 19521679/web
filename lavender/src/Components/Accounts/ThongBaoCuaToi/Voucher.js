import React, { Component } from "react";
import * as myVoucherApi from "../../apis/myvoucher";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import VoucherItem from "./VoucherItem";

class Voucher extends Component {
  state = { listVoucher: [] };
  componentDidMount() {
    this.loadListVoucher();
  }
  loadListVoucher() {
    myVoucherApi
      .myVoucher(this.props.customer.makhachhang)
      .then((success) => {
        if (success.status === 200) {
          this.setState({ listVoucher: success.data.value.$values });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async deleteVoucher() {
    await this.loadListVoucher();
    this.forceUpdate();
  }
  render() {
    return (
      <div className="list">
        {function () {
          var result = null;
          result = this.state.listVoucher.map((value, key) => {
            return (
              <VoucherItem
                key={key}
                myvoucher={value}
                makhachhang={this.props.customer.makhachhang}
                deleteMyVoucher={this.deleteVoucher.bind(this)}
              ></VoucherItem>
            );
          });
          return result;
        }.bind(this)()}
      </div>
    );
  }
}
Voucher.propTypes = {
  customer: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    customer: state.login.customer,
  };
};

export default connect(mapStateToProps)(Voucher);
