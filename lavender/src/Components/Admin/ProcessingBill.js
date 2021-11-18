import React, { Component } from "react";
import * as productApi from "../apis/product";
import * as customerApi from "../apis/customer";

export default class ProcessingBill extends Component {
  state = {product: undefined, customer: undefined};
  async componentDidMount() {
    let product=  undefined;
    let customer=   undefined;
    await productApi.findProductById(this.props.bill.sohoadon)
    .then((success) => {
      product= success.data.value;
    })
    .catch((error) => {
    });

    await customerApi.findCustomerByBillId(this.props.bill.sohoadon)
    .then((success) => {
      customer= success.data.value;
    })
    .catch((error) => {
    });

    this.setState({product: product, customer: customer});
  }
  render() {
    return (
      <div className="timeline-block mb-3">
        <span className="timeline-step text-warning ">
        <i class="bi bi-bell"></i>
        </span>
        <div className="timeline-content">
          <h6 className="text-dark text-sm font-weight-bold mb-0">
          {this.state.product!==undefined & this.state.product!==null  && this.state.product.tensanpham}, số lượng: soluong
          </h6>
          <h6 className="text-success text-sm font-weight-bolder">
            Đơn giá: {this.state.product!==undefined & this.state.product!==null  && this.state.product.dongia}
          </h6>
          <h6 className="text-success text-sm font-weight-bolder">
          {this.state.customer!==undefined & this.state.customer!==null  && this.state.customer.tenkhachhang}, {this.state.customer!==undefined & this.state.customer!==null  && this.state.customer.sodienthoai} 
          </h6>
          <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
          {this.props.bill.ngayhoadon}
          </p>
        </div>
      </div>
    );
  }
}
