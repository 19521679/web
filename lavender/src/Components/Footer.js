import React, { Component } from 'react'
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>Lavender</h3>
                    <p>
                      Khu phố 6 <br />
                      Phường Linh Trung,
                      <br />
                      Thành phố Thủ Đức <br />
                      <br />
                      <strong>Phone:</strong> +1 5589 55488 55
                      <br />
                      <strong>Email:</strong> info@example.com
                      <br />
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a >Trang chủ</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a >Dịch vụ</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a >Terms of service</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a >Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a >Web Design</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a >Web Development</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a  >Product Management</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a >Marketing</a>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right" />{" "}
                        <a >Graphic Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Join Our Newsletter</h4>
                    <p>
                      Tamen quem nulla quae legam multos aute sint culpa legam
                      noster magna
                    </p>
                    <form>
                      <input type="email" name="email" />
                      <input type="submit" defaultValue="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="container d-md-flex py-4">
              <div className="me-md-auto text-center text-md-start">
                <div className="copyright">
                  © Copyright{" "}
                  <strong>
                    <span>K^2*V*P</span>
                  </strong>
                  . All Rights Reserved
                </div>
                <div className="credits">
                  {/* All the links in the footer should remain intact. */}
                  {/* You can delete the links only if you purchased the pro version. */}
                  {/* Licensing information: https://bootstrapmade.com/license/ */}
                  {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/ */}
                  Designed by{" "}
                  <a >
                    4 Anh em nhà Khờ, Vờ, Phờ
                  </a>
                </div>
              </div>
              <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a >
                  <i className="bx bxl-twitter" />
                </a>
                <a >
                  <i className="bx bxl-facebook" />
                </a>
                <a >
                  <i className="bx bxl-instagram" />
                </a>
                <a >
                  <i className="bx bxl-skype" />
                </a>
                <a >
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </footer>
        )
    }
}
