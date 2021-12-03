import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as imageApi from "../apis/image";
import * as detailProductapi from "../apis/detailProduct";

export default function ProductItem(props) {
  const [giamoi, setGiamoi] = useState(0);
  useEffect(() => {
    detailProductapi
      .xemgiamoitheomasanpham(props.product.masanpham)
      .then((success) => {
        if (success.status === 200) setGiamoi(success.data.value);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <div id={35034} className="swiper-slide item-product">
      <div className="item-product__box-img">
        <Link to={props.product.image}>
          <img
            className="cpslazy loaded"
            alt="Product-promotion"
            data-ll-status="loaded"
            src={imageApi.image(props.product.image)}
          />
        </Link>
      </div>
      {giamoi < props.product.dongia && (
        <div className="box-item-sticker-percent">
          <p>
            Giảm {(100 - (giamoi / props.product.dongia) * 100).toFixed(0)}%
          </p>
        </div>
      )}
      <div className="item-product__box-name">
        <Link to={props.product.image}>
          <p>{props.product.tensanpham}</p>
        </Link>
      </div>
      <div className="item-product__box-price">
        <p className="special-price">
          {giamoi !== props.product.dongia && (
            <a href={() => false}>
              {giamoi === 0 ? "Hết hàng" : giamoi + "₫"}{" "}
            </a>
          )}
          &nbsp;
        </p>

        <p className="old-price">{props.product.dongia}&nbsp;₫</p>
      </div>
      <div className="item-product__box-raiting">
        <i className="fas fa-star checked" />
        <i className="fas fa-star checked" />
        <i className="fas fa-star checked" />
        <i className="fas fa-star checked" />
        <i className="fas fa-star" />
        &nbsp;3 đánh giá
      </div>
    </div>
  );
}
