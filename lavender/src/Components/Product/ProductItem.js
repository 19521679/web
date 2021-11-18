import React, { Component } from "react";
import "./ProductItem.css";
import * as imageApi from "../apis/image.js";
import {Link} from "react-router-dom";
export default class ProductItem extends Component {
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
          <div className="box-item-sticker-percent">
            <p>Giảm 34%</p>
          </div>
          <Link to={this.props.product.image} className="box-click" >
            <div className="icon">
              <img
              alt="img"
                src={imageApi.image(this.props.product.image)}
              ></img>
              <i className="bx bxl-dribbble" />
            </div>
            <h4>
              <a  className="product-name">{this.props.product.tensanpham}</a>
            </h4>
          </Link>

          <div className="product-price">
            <a >{this.props.product.dongia} ₫</a>
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
