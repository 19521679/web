import React, { Component } from "react";
import "./Product.css";
import * as imageApi from "../apis/image";
import * as productApi from "../apis/product";
import * as detailCartApi from "../apis/detailCart";
import DeleteDetailCartModal from "./DeleteDetailCartModal";

class Product extends Component {
  state = { product: {}, checked: false, showModal: false };
  showModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }
  async deleteProduct() {
    detailCartApi
      .deleteDetailCart(
        this.props.detailCart.magiohang,
        this.props.detailCart.masanpham
      )
      .then((success) => {
        if (success.status === 200) this.props.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  setValue(quantity) {
    let soluong = 0;
    soluong = this.props.detailCart.soluong + quantity;
    detailCartApi
      .setQuantityForDetailCart({
        ...this.props.detailCart,
        soluong: this.props.detailCart.soluong + quantity,
      })
      .then((success) => {
        if (success.status === 200) {
          this.props.changeQuantity(
            this.props.detailCart.masanpham,
            this.props.detailCart.dungluong,
            this.props.detailCart.mausac,
            soluong
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async componentDidMount() {
    await productApi
      .findProductById(this.props.detailCart.masanpham)
      .then((success) => {
        this.setState({ product: success.data.value });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  changeCheck(checked) {
    this.setState({ checked: checked });
    this.props.changeSelect(
      this.props.detailCart.masanpham,
      this.props.detailCart.dungluong,
      this.props.detailCart.mausac,
      checked
    );
  }
  static getDerivedStateFromProps(props, state) {
    return {
      checked: props.detailCart.chon,
    };
  }
  render() {
    return (
      <div className="styles__StyledIntended-sc-1dwh2vk-1 bQOXDC">
        <div>
          <DeleteDetailCartModal
          showModal={this.state.showModal}
            closeModal={this.closeModal.bind(this)}
            deleteProduct={this.deleteProduct.bind(this)}
          ></DeleteDetailCartModal>
          <div className="styles__StyledIntendedProduct-sc-1idi3y3-0 glclPp">
            <div className="row">
              <div className="col-1">
                <div className="intended__images ">
                  <div className="uUhc_B">
                    <label className="stardust-checkbox">
                      {this.props.detailCart.tien !== 0 && (
                        <input
                          className="checkbox-fake border rounded"
                          type="checkbox"
                          onChange={(e) => this.changeCheck(e.target.checked)}
                          checked={this.state.checked}
                        />
                      )}
                    </label>
                  </div>

                  <a
                    href={() => false}
                    className="intended__img"
                    data-view-id="cart_main_product"
                    data-view-index="d7159dd0-3bda-11ec-a1bf-f256c406ec5c"
                  >
                    <img
                      src={imageApi.image(this.state.product.image)}
                      alt="icon"
                    />
                  </a>
                  <div className="intended__content">
                    <a
                      href={() => false}
                      className="intended__name"
                      target="blank"
                      data-view-id="cart_main_product"
                      data-view-index="d7159dd0-3bda-11ec-a1bf-f256c406ec5c"
                    >
                      <img
                        src="https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png"
                        alt="tiki-fast"
                        className="intended__icon intended__icon--fast"
                      />
                      <div className="product-name">
                        {this.state.product.tensanpham}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <span className="intended__real-prices">
                  {this.props.detailCart.tien === 0 ? (
                    "Hết hàng"
                  ) : (
                    <p>{this.props.detailCart.tien}₫</p>
                  )}
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
                    <a href={() => false} className="qty-input" id="quantity">
                      {this.props.detailCart.soluong}
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
                  onClick={this.showModal.bind(this)}
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

export default Product;
