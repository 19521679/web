import React, { Component } from "react";
import "./Header.css";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginAct from "./redux/actions/loginAct";
import PropTypes from "prop-types";
import logo from "../Asset/logo/logo.png";
const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
    list: [],
  },
  {
    name: "Điện thoại",
    to: "/mobile",
    exact: true, 
  },
  {
    name: "Máy tính",
    to: "/computer",
    exact: false,
    list: [],
  },
  {
    name: "Phụ kiện",
    to: "/exdevice",
    exact: false,
    list: [],
  },
  {
    name: "Bài viết",
    to: "/blog",
    exact: false,
    list: [],
  },
  {
    name: "Bảo hành",
    to: "/guarantee",
    exact: false,
    list: [],
  },
];

var MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
          return (
            <li>
              <Link className={active} to={to}>
                {lable}
              </Link>
            </li>
          );
        }
      }
    ></Route>
  );
};

var showMenu = (temps) => {
  var result = null;
  result = temps.map((value, key) => {
    return (
      <MenuLink
        key={key}
        lable={value.name}
        to={value.to}
        activeOnlyWhenExact={value.exact}
        list={value.list}
      ></MenuLink>
    );
  });
  return result;
};

class Header extends Component {
  componentDidMount() {
    if (localStorage.getItem("hasLogined")) {
      const { loginActionCreators } = this.props;
      const { postLoginReport } = loginActionCreators;
      postLoginReport({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
      });
    }
  }
  render() {
    const { hasLogined } = this.props;
    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <img alt="logo-img" className="logo-img" src={logo}></img>
          <h1 className="ilogo">
            <Link to="/">Lavender</Link>
          </h1>
          <div id="navbar" className="navbar">
            <ul>
              {showMenu(menus)}
              <li>
                <Link className="getstarted scrollto " to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart mr-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
         
                        Giỏ hàng
                </Link>
              </li>
              {hasLogined ? (
                <li>
                  <Link className="getstarted scrollto" to="/lmember">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                    LMember
                  </Link>
                </li>
              ) : (
                <li>
                  <Link className="getstarted scrollto" to="/login">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* .navbar */}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  loginActionCreators: PropTypes.shape({
    postLoginReport: PropTypes.func,
  }),
  email: PropTypes.string,
  password: PropTypes.string,
  hasLogined: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    password: state.login.password,
    hasLogined: state.login.hasLogined,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginActionCreators: bindActionCreators(loginAct, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
