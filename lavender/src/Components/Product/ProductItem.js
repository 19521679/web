import React, { Component } from "react";
import "./ProductItem.css";
import * as imageApi from "../apis/image.js";
import { Link } from "react-router-dom";
import * as detailProductapi from "../apis/detailProduct";

export default class ProductItem extends Component {
  state = { giamoi: 0 };
  componentDidMount() {
    detailProductapi
      .xemgiamoitheomasanpham(this.props.product.masanpham)
      .then((success) => {
        this.setState({ giamoi: success.data.value });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // state = { resposeImage: {} };
  // componentDidMount() {
  //   var { product } = this.props;
  //   imageApi
  //     .image(product.image)
  //     .then((success) => {
  //       this.setState({ resposeImage: window.URL.createObjectURL(new Blob([success.data])) });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  render() {
    return (
      <div
        className="col-lg-3 col-md-4 d-flex align-items-stretch col-lg-2 product-item"
        data-aos="zoom-in"
        data-aos-delay={100}
      >
        <div className="icon-box iconbox-blue">
          {function () {
            if (this.state.giamoi !== this.props.product.dongia)
              return (
                <div className="box-item-sticker-percent">
                  <p>
                    Giảm{" "}
                    {(
                      100 -
                      (this.state.giamoi / this.props.product.dongia) * 100
                    ).toFixed(0)}
                    %
                  </p>
                </div>
              );
          }.bind(this)()}

          <Link to={this.props.product.image} className="box-click">
            <div className="icon">
              <img
                alt="img"
                src={imageApi.image(this.props.product.image)}
              ></img>
              <i className="bx bxl-dribbble" />
            </div>
            <h4>
              <a href={() => false} className="product-name">
                {this.props.product.tensanpham}
              </a>
            </h4>
          </Link>

          <div className="product-price">
            {function () {
              var result = [];
              if (this.state.giamoi !== this.props.product.dongia) {
                result.push(
                  <p className="old-price">{this.props.product.dongia}₫</p>
                );
              }
              result.push(<a href={() => false}>{this.state.giamoi} ₫</a>);
              return result;
            }.bind(this)()}
          </div>
          <div className="product-info">
            {" "}
            molestias excepturi asaasdasdasdasdasdasdasdasdasd
          </div>
        </div>
      </div>
    );
  }
}
