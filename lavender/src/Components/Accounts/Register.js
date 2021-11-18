import React, { Component } from "react";
import "./Register.css";
import * as registerAct from "../redux/actions/registerAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class Register extends Component {
  handleSubmit = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("name", document.getElementById("name").value);
    bodyFormData.append("email", document.getElementById("email").value);
    bodyFormData.append("password", document.getElementById("password").value);
    var postRegisterReport =
      this.props.registerActionCreators.postRegisterReport;
    postRegisterReport(bodyFormData);
  };
  render() {
    return (
        <section className="container register">
          {/* <form onSubmit={this.handleSubmit}> */}
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>You are 30 seconds away from earning your own money!</p>
              <button
                className="btn2"
                type="submit"
                id="submit"
                name
                defaultValue="Login"
                onClick={this.handleSubmit}
              >
                Đăng kí
              </button>
              <br />
            </div>
            <div className="col-md-9 register-right">
              <ul
                className="nav nav-tabs nav-justified"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    
                  >
                    Employee
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    role="tab"
                    
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Hirer
                  </a>
                </li>
              </ul>

              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-12 col-xl-11 col-md-6 ">
                  <div className="affix">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-6">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="name">
                            Họ và Tên
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue
                          id="confirm"
                          onclick={() => {
                            if (document.getElementById("confirm").checked) {
                              document.getElementById(
                                "submit"
                              ).disabled = false;
                            } else {
                              document.getElementById("submit").disabled = true;
                            }
                          }}
                        />
                        <label className="form-check-label" htmlFor="confirm">
                          I agree all statements in{" "}
                          <a >Terms of service</a>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-header">
                <img src="..." className="rounded me-2" alt="..." />
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">11 mins ago</small>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                />
              </div>
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
          {/* </form> */}
      </section>
    );
  }
}
Register.propTypes = {
  loregisterginActionCreators: PropTypes.shape({
    postLoginReport: PropTypes.func,
  }),
  email: PropTypes.string,
  password: PropTypes.string,
  hasLogined: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    email: state.register.email,
    password: state.register.password,
    hasLogined: state.register.hasLogined,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registerActionCreators: bindActionCreators(registerAct, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
