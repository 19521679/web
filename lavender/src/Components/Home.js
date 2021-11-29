import React, { Component } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import ProductItem from "./Product/ProductItem.js";
import * as mobileApi from "./apis/mobile";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = { data: [] };

  renderList() {
    var result = [];
    for (var i = 0; i < this.state.data.length; i++) {
      result.push(
        <ProductItem key={i} product={this.state.data[i]}></ProductItem>
      );
    }
    return result;
  }

  componentDidMount() {
    mobileApi
      .mobile()
      .then((success) => {
        this.setState({ data: success.data.value.$values });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <section className="container">
        <div className="row promotion1">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 carousel-title">
            <Carousel variant="light">
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://cdn.tgdd.vn/2021/11/banner/830-300-830x300-1.png"
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://cdn.tgdd.vn/2021/10/banner/830-300-830x300-26.png"
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://cdn.tgdd.vn/2021/11/banner/830-300-830x300.png"
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="promotion-row promotion2">
              <img
                className="d-block promotion-img box-shadow"
                src="https://cdn.tgdd.vn/2021/11/banner/laptopdesk(3)-340x340.jpg"
                alt="Third slide"
              />
              <img
                className="d-block promotion-img box-shadow"
                src="https://cdn.tgdd.vn/2021/11/banner/laptopdesk(1)-340x340-1.jpg"
                alt="Third slide"
              />
            </div>
            <div className="promotion-row promotion3">
              <img
                className="d-block promotion-img box-shadow"
                src="https://cdn.tgdd.vn/2021/11/banner/laptopdesk-340x340.jpg"
                alt="Third slide"
              />
              <img
                className="d-block promotion-img box-shadow"
                src="https://cdn.tgdd.vn/2021/11/banner/die%CC%A3%CC%82nthoaidesk-340x340.jpg"
                alt="Third slide"
              />
            </div>
          </div>
        </div>

        {/* Điện thoại nổi bật */}

        <div className="row">
          <div className="box-title">
            <a className="box-title__title">
              <h2>Điện thoại nổi bật nhất</h2>
            </a>
            <div className="box-related-tag">
              <div className="list-related-tag">
                <Link to="/mobile/apple" className="btn btn-default btn-sm">
                  Apple
                </Link>
                <Link to="/mobile/samsung" className="btn btn-default btn-sm">
                  Samsung
                </Link>
                <Link to="/mobile/xiaomi" className="btn btn-default btn-sm">
                  Xiaomi
                </Link>
                <Link to="/mobile/oppo" className="btn btn-default btn-sm">
                  OPPO
                </Link>
                <Link to="/mobile/realme" className="btn btn-default btn-sm">
                  Realme
                </Link>
                <Link to="/mobile/nokia" className="btn btn-default btn-sm">
                  Nokia
                </Link>
                <Link to="/mobile/vivo" className="btn btn-default btn-sm">
                  Vivo
                </Link>
                <Link to="/mobile" className="item-related-tag">
                  Xem tất cả
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* list-item */}

        <div id="highlight" className="highlight section-bg">
          <div className="container list-item " data-aos="fade-up">
            <div className="row row-item">{this.renderList()}</div>
          </div>
        </div>

        {/* Laptop nổi bật */}
        <div className="row">
          <div className=" box-title">
            <a className="box-title__title">
              <h2>Laptop</h2>
            </a>
            <div className="box-related-tag">
              <div className="list-related-tag">
                <a className="btn btn-default btn-sm">Mac</a>
                <a className="btn btn-default btn-sm">ASUS</a>
                <a className="btn btn-default btn-sm">HP</a>
                <a className="btn btn-default btn-sm">Microsoft Surface</a>
                <a className="btn btn-default btn-sm">MSI</a>
                <a className="btn btn-default btn-sm">Dell</a>{" "}
                <a className="item-related-tag">Xem tất cả</a>
              </div>
            </div>
          </div>
        </div>
        {/* list-item */}

        <div className="highlight section-bg laptopnoibat">
          <div className="container list-item2 " data-aos="fade-up">
            <div className="row row-item"></div>
          </div>
        </div>

        {/* Các thương hiệu */}

        <div className="row">
          <a
            id="widget_gearvn_brands"
            style={{ display: "block", marginTop: "20px" }}
          >
            <div className="brands">
              <div className="brand-header">
                <h3>Thương hiệu sản phẩm</h3>
                <a>Xem tất cả</a>
              </div>
              <div className="brand-body">
                <div className="brand-items">
                  <div className="brch-row">
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/Intel-1.png"
                          alt="Intel"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/09/logo_281x151-04.jpg"
                          alt="Nvidia"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/amd.png"
                          alt="AMDA"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/asus.png"
                          alt="Asus"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/gigabyte.png"
                          alt="Gigabyte"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/msi.png"
                          alt="MSI"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/acer.png"
                          alt="Acer"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/logitech.png"
                          alt="Logitech"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="brch-row">
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/hYY5dAy9-1-1.png"
                          alt="Apple"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/lg.png"
                          alt="LG"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/samsung.png"
                          alt="SAMSUNG"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/Kington.png"
                          alt="Kington"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/Corsair-1.png"
                          alt="Corsair"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/razer.png"
                          alt="RAZER"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a>
                        <img
                          src="https://gstatic.gearvn.com/2021/08/Hyper.png"
                          alt="Hyperx"
                        />
                      </a>
                    </div>
                    <div className="brand-item">
                      <a href="/mua?filter_manufacturer=lenovo">
                        <img
                          src="https://gstatic.gearvn.com/2021/10/LenovoLogo-282x152-02.png"
                          alt="Lenovo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
  }
}
