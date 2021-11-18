import React, { Component } from "react";
import "./style.css";
import Product from "./Product.js";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cartAct from "../redux/actions/cartAct";
import PropTypes from "prop-types";

class index extends Component {
  pushProduct(){
    const {cart}= this.props.cart;
    if (cart===undefined) return;
    let result = null;
    if (cart.length > 0)
    {
      result=  cart.map((value, key) => {
        return <Product product= {value} key={key} productid={key}></Product>
      });
    }
    
    return result;
  
  }

  componentDidMount() {
    const {cartActionCreators}= this.props;
    const customerid= this.props.customer.makhachhang;
    cartActionCreators.loadCartReport(customerid);
    this.forceUpdate();
  }
  render() {
    return (
      <section>
        {/* {() => window.location.reload()} */}
        <div className="cart">
          <div className="container">
            <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div className="cart-inner">
                  <div className="styles__StyledProductsV2-sc-rkft9e-0 dioUnE">
                    <h4 className="productsV2__title">Giỏ hàng</h4>
                    <div className="productsV2-heading box-shadow">
                      <div className="row">
                        <div className="col-1">
                          <label className="styles__StyledCheckbox-sc-kvz5pc-0 hNjxWW">
                            <input type="checkbox" />
                            <span className="checkbox-fake" />
                            <span className="label">Tất cả (1 sản phẩm)</span>
                          </label>
                        </div>
                        <div className="col-2">Đơn giá</div>
                        <div className="col-3">Số lượng</div>
                        <div className="col-5">
                          <span className="productsV2__remove-all">
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                              alt="deleted"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="productsV2-content pink-shadow">
                      <div>
                        <div
                          className="infinite-scroll-component "
                          style={{ height: "auto", overflow: "auto" }}
                        >
                          <div className="styles__StyledIntendedSeller-sc-1dwh2vk-0 kTsjPS">
                            <div className="sellers">
                              <div className="pustProduct">{this.pushProduct()}</div>
                              <div className="styles__StyledSellerDiscount-sc-rbk7cj-0 hIODeW">
                                <div
                                  className="wrapper"
                                  data-view-id="cart_seller.coupon_view.all"
                                >
                                  <div className="description">
                                    Shop Khuyến Mãi
                                  </div>
                                  <div className="small-coupon-list" />
                                  <span className="seller-coupon__note">
                                    Vui lòng chọn sản phẩm trước
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="cart-total-prices">
                  <div className="cart-total-prices__inner">
                    <div className="styles__StyledShippingAddress-sc-1sjj51k-0 juqUnC box-shadow">
                      <p className="heading">
                        <span className="text">Giao tới</span>
                        <span
                          data-view-id="cart_shipping_location.change"
                          className="link"
                        >
                          Thay đổi
                        </span>
                      </p>
                      <p className="title">
                        <b className="name">Lê Mai Duy Khánh</b>
                        <b className="phone">0914630145</b>
                      </p>
                      <p className="address">
                        47A Mọ Kọ, tổ 14, Thị trấn Di Linh, Huyện Di Linh, Lâm
                        Đồng
                      </p>
                    </div>
                    <div className="styles__StyledWrapCoupons-sc-1d6idyr-0 ekRzNN box-shadow">
                      <div className="styles__StyledCouponBox-sc-1ibe03g-0 jmylnB">
                        <div className="title-usage">
                          <p className="coupon-title">Tiki khuyến mãi</p>
                          <p className="max-usage">
                            Có thể chọn 2
                            <img
                              className="max-usage__info"
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/icons-info-gray.svg"
                              alt="info"
                            />
                          </p>
                        </div>
                        <div
                          className="eligible_coupon_list"
                          data-view-id="platform_coupon"
                        />
                        <div
                          data-view-id="platform_coupon.cart_coupon_view.all"
                          className="show-more"
                        >
                          <img
                            alt=""
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_icon.svg"
                          />
                          <span>Chọn hoặc nhập Khuyến mãi </span>
                        </div>
                      </div>
                    </div>
                    <div className="styles__StyledCartPrices-sc-1op1gws-0 cdzcxd box-shadow">
                      <div className="prices">
                        <ul className="prices__items">
                          <li className="prices__item">
                            <span className="prices__text">Tạm tính</span>
                            <span className="prices__value">0đ</span>
                          </li>
                          <li className="prices__item">
                            <span className="prices__text">Giảm giá</span>
                            <span className="prices__value">0đ</span>
                          </li>
                        </ul>
                        <div className="prices__total">
                          <span className="prices__text">Tổng cộng</span>
                          <div className="prices__content">
                            <div className="prices__value prices__value--empty">
                              Vui lòng chọn sản phẩm
                            </div>
                            <span className="prices__value--noted">
                              (Đã bao gồm VAT nếu có)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      data-view-id="cart_navigation_proceed box-shadow"
                      data-view-label='{"shipping_salerules":[]}'
                      type="button"
                      className="cart__submit"
                    >
                      Mua Hàng (0)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
index.propTypes = {
  cartActionCreators: PropTypes.shape({
    loadCartReport: PropTypes.func,
  }),
  password: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    customer: state.login.customer,
    cart: state.cart.cart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cartActionCreators: bindActionCreators(cartAct, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index));
