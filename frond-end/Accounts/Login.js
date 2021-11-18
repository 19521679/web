import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginAct from "../redux/actions/loginAct";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Login extends Component {
  submitSignin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const { loginActionCreators } = this.props;
    const { postLoginReport } = loginActionCreators;
    postLoginReport({
      email: email,
      password: password,
    });
  };

  render() {
    return (
      <section>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone"
                ></img>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* Checkbox */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="form1Example3"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a >Forgot password?</a>
                </div>
                {/* Submit button */}
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this.submitSignin}
                >
                  Sign in
                </button>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <Link
                  className="btn btn-primary btn-lg btn-block"
                  to="/register"
                  role="button"
                >
                  <i className="fab fa-register me-2" />
                  Register
                </Link>
                <Link
                  className="btn btn-primary btn-lg btn-block"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2" />
                  Continue with Facebook
                </Link>
                <Link
                  className="btn btn-primary btn-lg btn-block"
                  role="button"
                >
                  <i className="fab fa-twitter me-2" />
                  Continue with Twitter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
Login.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
