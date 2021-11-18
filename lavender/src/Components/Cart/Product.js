import React, { Component } from "react";
import "./Product.css";
import * as imageApi from "../apis/image";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as cartAct from "../redux/actions/cartAct";
class Product extends Component {
  
  constructor(props) {
    super(props);

    var product = this.props.product; 
    this.state={ product: product };
  }
  deleteProduct() {
    // this.props.delete();
    let {cartActionCreators} = this.props;
    var customerid= this.props.customer.makhachhang;
    cartActionCreators.deleteProductReport(customerid, this.props.product.masanpham);
  }
  setValue(quantity) {
    var producttemp=this.state.product;
    producttemp.soluong+=quantity;
    this.setState({ product: producttemp });
    this.forceUpdate();
  }
  
  render() {
    return (
      <div className="styles__StyledIntended-sc-1dwh2vk-1 bQOXDC">
        <div>
          { ()=>{  }}
          <div className="styles__StyledIntendedProduct-sc-1idi3y3-0 glclPp">
            <div className="row">
              <div className="col-1">
                <div className="intended__images false">
                  <div className="intended__checkbox">
                    <label className="styles__StyledCheckbox-sc-kvz5pc-0 hNjxWW">
                      <input
                        type="checkbox"
                        data-teliew-id
                        data-view-index="d7159dd0-3bda-11ec-a1bf-f256c406ec5c"
                      />
                      <span className="checkbox-fake" />
                    </label>
                  </div>
                  <a
                    className="intended__img"
                    data-view-id="cart_main_product"
                    data-view-index="d7159dd0-3bda-11ec-a1bf-f256c406ec5c"
                  >
                    <img
                      src={imageApi.image(this.state.product.masanphamNavigation.image, 0)}
                      alt="icon"
                    />
                  </a>
                  <div className="intended__content">
                    <a
                      className="intended__name"
                      target="_blank"
                      data-view-id="cart_main_product"
                      data-view-index="d7159dd0-3bda-11ec-a1bf-f256c406ec5c"
                    >
                      <img
                        src="https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png"
                        alt="tiki-fast"
                        className="intended__icon intended__icon--fast"
                      />
                      <div className="product-name">
                        {this.state.product.masanphamNavigation.tensanpham}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <span className="intended__real-prices">
                  {this.state.product.masanphamNavigation.dongia}₫
                </span>
              </div>
              <div className="col-3">
                <div className="intended-qty">
                  <div className="styles__StyledIntendedQty-sc-1bo1fa9-0 cGnbJp">
                    <span
                      data-view-id="cart_main_quantity.decrease"
                      data-view-index="d7159dd0-3bda-11ec-a1bf-f256c406ec5c"
                      className="qty-decrease "
                      onClick={() => this.setValue(-1)}
                    >
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                        alt="decrease"
                      />
                    </span>
                    <a className="qty-input" id="quantity">
                      {
                        this.state.product.soluong
                      }
                    </a>
                    <span
                      data-view-id="cart_main_quantity.increase"
                      data-view-index="d7159dd0-3bda-11ec-a1bf-f256c406ec5c"
                      className="qty-increase "
                      onClick={() => this.setValue(1)}
                    >
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                        alt="increase"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <span
                  className="intended__delete"
                  data-view-id="cart_main_remove.product"
                  data-view-index="d7159dd0-3bda-11ec-a1bf-f256c406ec5c"
                  onClick={()=>this.deleteProduct()}
                >
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                    alt="deleted"
                    
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

Product.propTypes = {
  cartActionCreators: PropTypes.shape({
    deleteCartReport: PropTypes.func,
  }),
  cart: PropTypes.object,
  customer: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    customer: state.login.customer
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cartActionCreators: bindActionCreators(cartAct, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
