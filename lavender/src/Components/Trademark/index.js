import React, { Component } from "react";
import { mobiletrademark } from "../../Common/constants/trademark";
import { laptoptrademark } from "../../Common/constants/trademark";
import { Route, Link } from "react-router-dom";
import "./style.css";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../Asset/trademark", false, /\.(png|jpe?g|svg)$/)
);

const myImage = (name) => {
  let img = null;
  images.map((data) => {
    if (data.default.includes(name)) img = data.default;
    return data.default;
  });
  return img;
};

export default class index extends Component {
  mapTrademark = (type, mobiletrademark, laptoptrademark) => {
    let result = null;
    let trademark = null;
    switch (type) {
      case "mobile":
        trademark = mobiletrademark;
        break;
      case "laptop":
        trademark = laptoptrademark;
        break;
      default:
    }

    if (trademark.length !== 0) {
      result = trademark.map((value, index) => {
        return (
          <Link to={"/" + type + "/" + value} className="trademark-item">
            <img
              className="trademark-icon loaded"
              // data-ll-status="loaded"
              src={myImage(value)}
              alt=""
            ></img>
          </Link>
        );
      });
    }
    return <Route>{result}</Route>;
  };
  render() {
    return (
      <div className="trademark-list">
        {this.mapTrademark(this.props.type, mobiletrademark, laptoptrademark)}
      </div>
    );
  }
}
