import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div data-server-rendered="true" id="__nuxt">
        {/**/}
        <div id="__layout">
          <div className="min-h-screen">
            <header className="z-20 bg-white">
              <div className="topbar relative z-10 bg-white">
                <div className="container">
                  <div className="flex items-center">
                    <div className="logo mr-auto">
                      <a
                        href="/"
                        aria-current="page"
                        className="inline-block align-top nuxt-link-exact-active nuxt-link-active"
                      >
                        <img
                          src="/logo-desktop.svg"
                          alt="logo"
                          style={{ height: "51px" }}
                        />
                      </a>
                    </div>{" "}
                    <ul className="flex items-center static text-sm">
                      <li className="item-menu leading-none ml-5 xl:ml-8 first:ml-0">
                        <a
                          href="/cong-nghe-so"
                          className="font-medium text-dark-blue hover:text-blue leading-7 py-3"
                        >
                          Công Nghệ Số
                        </a>{" "}
                        <div
                          className="submenu pt-4 pb-3 text-base bg-white"
                          style={{ display: "none" }}
                        >
                          <ul>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/cong-nghe-so/mobile"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Mobile
                              </a>
                            </li>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/cong-nghe-so/laptop-pc"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Laptop &amp; PC
                              </a>
                            </li>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/cong-nghe-so/gear"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Gear
                              </a>
                            </li>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/cong-nghe-so/khoa-hoc"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Khoa học
                              </a>
                            </li>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/cong-nghe-so/xe"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Xe
                              </a>
                            </li>{" "}
                            <li className="flex items-center">
                              <a
                                href="/cong-nghe-so"
                                className="text-sm text-gray-medium hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Tất cả
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="item-menu leading-none ml-5 xl:ml-8 first:ml-0">
                        <a
                          href="/review"
                          className="font-medium text-dark-blue hover:text-blue leading-7 py-3"
                        >
                          Review
                        </a>{" "}
                        <div
                          className="submenu pt-4 pb-3 text-base bg-white"
                          style={{ display: "none" }}
                        >
                          <ul>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/review/smartphone"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Smartphone
                              </a>
                            </li>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/review/laptop-pc"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Laptop &amp; PC
                              </a>
                            </li>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/review/phu-kien"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Phụ kiện
                              </a>
                            </li>{" "}
                            <li className="flex items-center">
                              <a
                                href="/review"
                                className="text-sm text-gray-medium hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Tất cả
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="item-menu leading-none ml-5 xl:ml-8 first:ml-0">
                        <a
                          href="/goc-nhin"
                          className="font-medium text-dark-blue hover:text-blue leading-7 py-3"
                        >
                          Góc Nhìn
                        </a>{" "}
                        <div
                          className="submenu pt-4 pb-3 text-base bg-white"
                          style={{ display: "none" }}
                        >
                          <ul>
                            {" "}
                            <li className="flex items-center">
                              <a
                                href="/goc-nhin"
                                className="text-sm text-gray-medium hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Tất cả
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="item-menu leading-none ml-5 xl:ml-8 first:ml-0">
                        <a
                          href="/kien-thuc"
                          className="font-medium text-dark-blue hover:text-blue leading-7 py-3"
                        >
                          Kiến Thức
                        </a>{" "}
                        <div
                          className="submenu pt-4 pb-3 text-base bg-white"
                          style={{ display: "none" }}
                        >
                          <ul>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/kien-thuc/giai-thich"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Giải thích
                              </a>
                            </li>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/kien-thuc/huong-dan-toi-uu"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Hướng dẫn &amp; Tối ưu
                              </a>
                            </li>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/kien-thuc/tu-van"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Tư vấn
                              </a>
                            </li>
                            <li className="hover:bg-gray-light text-dark-blue2 flex items-center">
                              <a
                                href="/kien-thuc/thu-nghiem"
                                className="block leading-150 hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Thử nghiệm
                              </a>
                            </li>{" "}
                            <li className="flex items-center">
                              <a
                                href="/kien-thuc"
                                className="text-sm text-gray-medium hover:text-blue hover:font-medium flex-1 px-6"
                              >
                                Tất cả
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>{" "}
                      <li className="static leading-none ml-6">
                        <a
                          href="javascript:;"
                          className="w-8 h-8 flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-dark-blue icon icon-icons"
                          >
                            <use
                              href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-menu"
                              xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-menu"
                            />
                          </svg>
                        </a>{" "}
                        {/**/}
                      </li>
                    </ul>{" "}
                    {/**/}
                  </div>
                </div>
              </div>{" "}
              {/**/}
            </header>{" "}
            <main className="overflow-hidden bg-white xl:pt-5">
              <div className="container">
                <div className="mb-6 leading-relaxed md:mb-10 md:flex -mx-10px">
                  <div className="mb-4 md:w-8/12 px-10px md:mb-0">
                    <section className="overflow-hidden">
                      <div className="md:h-232px xl:h-404px relative info">
                        <a
                          href="/danh-gia-chi-tiet-samsung-galaxy-a52s-5g-cuc-khoe-so-voi-muc-gia-3558.html"
                          className="block thumnail-post type-top"
                        >
                          <div>
                            <picture>
                              <source
                                media="(max-width: 767px)"
                                srcSet="https://api.thinkview.vn/uploads/backend/2021/10/19/thumb-danh-gia-chi-tiet-samsung-galaxy-a52s-square.jpg"
                              />{" "}
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://api.thinkview.vn/uploads/backend/2021/10/19/thumb-danh-gia-chi-tiet-samsung-galaxy-a52s.jpg"
                              />{" "}
                              <img
                                src="https://api.thinkview.vn/uploads/backend/2021/10/19/thumb-danh-gia-chi-tiet-samsung-galaxy-a52s-square.jpg"
                                alt="Đánh giá chi tiết Samsung Galaxy A52s 5G: “Cực khoẻ’ so với mức giá!"
                              />
                            </picture>
                          </div>
                        </a>{" "}
                        <div className="bg-gradient absolute w-full p-4 pt-8 bottom-0 space-y-2 md:p-6 md:pt-10">
                          <h5 className="break-words md:max-w-md xl:max-w-xl font-bold text-white text-xl md:text-base xl:text-2xl leading-snug">
                            <a href="/danh-gia-chi-tiet-samsung-galaxy-a52s-5g-cuc-khoe-so-voi-muc-gia-3558.html">
                              Đánh giá chi tiết Samsung Galaxy A52s 5G: “Cực
                              khoẻ’ so với mức giá!
                            </a>
                          </h5>{" "}
                          <div className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-white text-opacity-50 icon icon-icons"
                            >
                              <use
                                href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                              />
                            </svg>{" "}
                            <a
                              href="/danh-gia-chi-tiet-samsung-galaxy-a52s-5g-cuc-khoe-so-voi-muc-gia-3558.html#article-comments"
                              className="font-normal text-white text-sm md:text-xs xl:text-sm leading-none"
                            >
                              0 Bình luận
                            </a>{" "}
                            <span className="font-normal text-sm md:text-xs xl:text-sm text-gray-100">
                              4 tuần trước
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>{" "}
                  <div className="md:w-4/12 px-10px">
                    <section className="overflow-hidden">
                      <div className="md:h-232px xl:h-404px relative info">
                        <a
                          href="/asus-rog-zephyrus-g14-alan-walker-chinh-thuc-ra-mat-dinh-hieu-nang-bat-phong-cach-3526.html"
                          className="block"
                        >
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcSet="https://api.thinkview.vn/uploads/backend/2021/8/20/g14-alan-walker-thumb-vuong-horizontal.jpg"
                            />{" "}
                            <source srcSet="https://api.thinkview.vn/uploads/backend/2021/8/20/g14-alan-walker-thumb-vuong-square.jpg" />{" "}
                            <img
                              src="https://api.thinkview.vn/uploads/backend/2021/8/20/g14-alan-walker-thumb-vuong-square.jpg"
                              alt="ASUS ROG Zephyrus G14 Alan Walker chính thức ra mắt: Đỉnh hiệu năng, bật phong cách"
                            />
                          </picture>
                        </a>{" "}
                        <div className="bg-gradient absolute w-full p-4 pt-8 bottom-0 space-y-2 md:p-6 md:pt-10">
                          <h5 className="break-words font-bold text-white text-base md:text-base xl:text-2xl leading-snug">
                            <a href="/asus-rog-zephyrus-g14-alan-walker-chinh-thuc-ra-mat-dinh-hieu-nang-bat-phong-cach-3526.html">
                              ASUS ROG Zephyrus G14 Alan Walker chính thức ra
                              mắt: Đỉnh hiệu năng, bật phong cách
                            </a>
                          </h5>{" "}
                          <div className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-white text-opacity-50 icon icon-icons"
                            >
                              <use
                                href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                              />
                            </svg>{" "}
                            <a
                              href="/asus-rog-zephyrus-g14-alan-walker-chinh-thuc-ra-mat-dinh-hieu-nang-bat-phong-cach-3526.html#article-comments"
                              className="text-white text-sm md:text-xs xl:text-sm leading-none"
                            >
                              0 Bình luận
                            </a>{" "}
                            <span className="text-sm md:text-xs xl:text-sm text-gray-100">
                              3 tháng trước
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>{" "}
                <div className="mb-6 leading-relaxed xl:mb-10 xl:flex -mx-10px">
                  <div className="mb-5 xl:mb-0 xl:w-8/12 px-10px">
                    <div className="md:h-full">
                      <div className="font-bold text-xl md:text-xl xl:text-28px text-dark-blue pl-2 pb-1 mb-4 md:mb-6 relative leading-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 bottom-0 z-0 w-4 h-4 xl:w-22px xl:h-22px icon icon-icons"
                        >
                          <use
                            href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-title"
                            xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-title"
                          />
                        </svg>{" "}
                        <span className="relative">Đáng chú ý</span>
                      </div>{" "}
                      <div className="md:flex md:space-x-5">
                        <div className="md:w-270px xl:w-384px">
                          <div>
                            <div className="thumnail-post mb-4">
                              <a href="/bo-suu-tap-samsung-galaxy-thom-brown-moi-chinh-thuc-ra-mat-3528.html">
                                <div>
                                  <picture>
                                    <source
                                      media="(min-width: 768px)"
                                      srcSet="https://api.thinkview.vn/uploads/backend/2021/8/20/thumb-samsung-thom-browne-moi-chay-hang-2.jpg"
                                    />{" "}
                                    <img
                                      src="https://api.thinkview.vn/uploads/backend/2021/8/20/thumb-samsung-thom-browne-moi-chay-hang-2-horizontal.jpg"
                                      alt="Bộ sưu tập Samsung Galaxy Thom Brown mới chính thức ra mắt!"
                                    />
                                  </picture>
                                </div>
                              </a>
                            </div>{" "}
                            <div className="blog-item-info">
                              <div className="mb-2 font-medium text-pearl text-base leading-normal">
                                <a href="/bo-suu-tap-samsung-galaxy-thom-brown-moi-chinh-thuc-ra-mat-3528.html">
                                  Bộ sưu tập Samsung Galaxy Thom Brown mới chính
                                  thức ra mắt!
                                </a>
                              </div>{" "}
                              <div className="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4 text-gray-100 icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                  />
                                </svg>{" "}
                                <a
                                  href="/bo-suu-tap-samsung-galaxy-thom-brown-moi-chinh-thuc-ra-mat-3528.html#article-comments"
                                  className="text-info text-xs md:text-sm leading-none"
                                >
                                  1 Bình luận
                                </a>{" "}
                                <span className="text-xs md:text-sm text-gray-100 leading-none">
                                  2 tháng trước
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="flex-1 border-t pt-4 mt-4 md:pt-0 md:mt-0 md:border-t-0 xl:pr-5 xl:border-r border-gray-light space-y-4">
                          <div className="flex space-x-3 md:space-x-5 pb-4 border-solid border-b border-gray-light last:border-b-0 last:pb-0">
                            <div className="thumnail-post w-100px md:w-106px">
                              <a href="/viewsonic-to-chuc-cuoc-thi-anh-toan-cau-colorpro-award-2021-voi-chu-de-new-adventure-3527.html">
                                <div>
                                  <img
                                    data-src="https://api.thinkview.vn/uploads/backend/2021/8/19/viewsonic-cuoc-thi-anh-thinkview-horizontal.jpg"
                                    alt="ViewSonic Tổ Chức Cuộc Thi Ảnh Toàn Cầu ColorPro Award 2021 Với Chủ Đề “New Adventure”"
                                    width={384}
                                    height={230}
                                    src="/default-image.jpg"
                                  />
                                </div>
                              </a>
                            </div>{" "}
                            <div className="flex-1 blog-item-info">
                              <div className="mb-2 font-medium text-pearl text-base leading-normal">
                                <a href="/viewsonic-to-chuc-cuoc-thi-anh-toan-cau-colorpro-award-2021-voi-chu-de-new-adventure-3527.html">
                                  ViewSonic Tổ Chức Cuộc Thi Ảnh Toàn Cầu
                                  ColorPro Award 2021 Với Chủ Đề “New Adventure”
                                </a>
                              </div>{" "}
                              <div className="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4 text-gray-100 icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                  />
                                </svg>{" "}
                                <a
                                  href="/viewsonic-to-chuc-cuoc-thi-anh-toan-cau-colorpro-award-2021-voi-chu-de-new-adventure-3527.html#article-comments"
                                  className="text-dark-gray text-xs md:text-sm leading-none"
                                >
                                  1 Bình luận
                                </a>{" "}
                                <span className="text-xs md:text-sm text-gray-medium leading-none">
                                  2 tháng trước
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-3 md:space-x-5 pb-4 border-solid border-b border-gray-light last:border-b-0 last:pb-0">
                            <div className="thumnail-post w-100px md:w-106px">
                              <a href="/danh-gia-msi-spatium-m480-trai-nghiem-dat-gia-nhung-hoan-toan-xung-dang-3525.html">
                                <div>
                                  <img
                                    data-src="https://api.thinkview.vn/uploads/backend/2021/8/13/danh-gia-ssd-msi-spatium-m480-pcie-4-0-nvme-m-2-13-horizontal.jpg"
                                    alt="Đánh giá MSI Spatium M480: trải nghiệm đắt giá nhưng hoàn toàn xứng đáng"
                                    width={384}
                                    height={230}
                                    src="/default-image.jpg"
                                  />
                                </div>
                              </a>
                            </div>{" "}
                            <div className="flex-1 blog-item-info">
                              <div className="mb-2 font-medium text-pearl text-base leading-normal">
                                <a href="/danh-gia-msi-spatium-m480-trai-nghiem-dat-gia-nhung-hoan-toan-xung-dang-3525.html">
                                  Đánh giá MSI Spatium M480: trải nghiệm đắt giá
                                  nhưng hoàn toàn xứng đáng
                                </a>
                              </div>{" "}
                              <div className="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4 text-gray-100 icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                  />
                                </svg>{" "}
                                <a
                                  href="/danh-gia-msi-spatium-m480-trai-nghiem-dat-gia-nhung-hoan-toan-xung-dang-3525.html#article-comments"
                                  className="text-dark-gray text-xs md:text-sm leading-none"
                                >
                                  0 Bình luận
                                </a>{" "}
                                <span className="text-xs md:text-sm text-gray-medium leading-none">
                                  3 tháng trước
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-3 md:space-x-5 pb-4 border-solid border-b border-gray-light last:border-b-0 last:pb-0">
                            <div className="thumnail-post w-100px md:w-106px">
                              <a href="/gigabyte-ra-mat-laptop-chinh-hang-tai-viet-nam-huong-toi-game-thu-va-nguoi-dung-sang-tao-3483.html">
                                <div>
                                  <img
                                    data-src="https://api.thinkview.vn/uploads/backend/2021/6/8/giga-horizontal.jpg"
                                    alt="GIGABYTE ra mắt laptop Chính hãng tại Việt Nam, hướng tới game thủ và người dùng sáng tạo"
                                    width={384}
                                    height={230}
                                    src="/default-image.jpg"
                                  />
                                </div>
                              </a>
                            </div>{" "}
                            <div className="flex-1 blog-item-info">
                              <div className="mb-2 font-medium text-pearl text-base leading-normal">
                                <a href="/gigabyte-ra-mat-laptop-chinh-hang-tai-viet-nam-huong-toi-game-thu-va-nguoi-dung-sang-tao-3483.html">
                                  GIGABYTE ra mắt laptop Chính hãng tại Việt
                                  Nam, hướng tới game thủ và người dùng sáng tạo
                                </a>
                              </div>{" "}
                              <div className="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4 text-gray-100 icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                  />
                                </svg>{" "}
                                <a
                                  href="/gigabyte-ra-mat-laptop-chinh-hang-tai-viet-nam-huong-toi-game-thu-va-nguoi-dung-sang-tao-3483.html#article-comments"
                                  className="text-dark-gray text-xs md:text-sm leading-none"
                                >
                                  0 Bình luận
                                </a>{" "}
                                <span className="text-xs md:text-sm text-gray-medium leading-none">
                                  5 tháng trước
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="xl:w-4/12 px-10px">
                    <div className="md:h-full">
                      <div className="font-bold text-xl md:text-xl xl:text-28px text-dark-blue pl-2 pb-1 mb-4 md:mb-6 relative leading-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-0 bottom-0 z-0 w-4 h-4 xl:w-22px xl:h-22px icon icon-icons"
                        >
                          <use
                            href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-title"
                            xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-title"
                          />
                        </svg>{" "}
                        <span className="relative">Trending</span>
                      </div>{" "}
                      <div className="space-y-4">
                        <div className="flex space-x-3 md:space-x-5 pb-4 border-solid border-b border-gray-light last:border-b-0 last:pb-0">
                          <div className="thumnail-post w-100px md:w-106px">
                            <a href="/tren-tay-asus-tuf-dash-f15-cu-ngo-la-zephyrus-3445.html">
                              <div>
                                <img
                                  data-src="https://api.thinkview.vn/uploads/backend/2021/6/5/dsc9206-2-horizontal.jpg"
                                  alt="Trên tay ASUS TUF Dash F15: Cứ ngỡ là Zephyrus"
                                  width={384}
                                  height={230}
                                  src="/default-image.jpg"
                                />
                              </div>
                            </a>
                          </div>{" "}
                          <div className="flex-1 blog-item-info">
                            <div className="mb-2 font-medium text-pearl text-base leading-normal">
                              <a href="/tren-tay-asus-tuf-dash-f15-cu-ngo-la-zephyrus-3445.html">
                                Trên tay ASUS TUF Dash F15: Cứ ngỡ là Zephyrus
                              </a>
                            </div>{" "}
                            <div className="flex items-center space-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-gray-100 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                />
                              </svg>{" "}
                              <a
                                href="/tren-tay-asus-tuf-dash-f15-cu-ngo-la-zephyrus-3445.html#article-comments"
                                className="text-dark-gray text-xs md:text-sm leading-none"
                              >
                                0 Bình luận
                              </a>{" "}
                              <span className="text-xs md:text-sm text-gray-medium leading-none">
                                5 tháng trước
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-3 md:space-x-5 pb-4 border-solid border-b border-gray-light last:border-b-0 last:pb-0">
                          <div className="thumnail-post w-100px md:w-106px">
                            <a href="/antutu-cong-bo-bang-xep-hang-hieu-nang-moi-snapdragon-888-van-chem-che-ngoi-vuong-3477.html">
                              <div>
                                <img
                                  data-src="https://api.thinkview.vn/uploads/backend/2021/6/7/thumb-antutu-may-snapdragon-888-horizontal.jpg"
                                  alt="AnTuTu công bố bảng xếp hạng hiệu năng mới: Snapdragon 888 vẫn chễm chệ ngôi vương!"
                                  width={384}
                                  height={230}
                                  src="/default-image.jpg"
                                />
                              </div>
                            </a>
                          </div>{" "}
                          <div className="flex-1 blog-item-info">
                            <div className="mb-2 font-medium text-pearl text-base leading-normal">
                              <a href="/antutu-cong-bo-bang-xep-hang-hieu-nang-moi-snapdragon-888-van-chem-che-ngoi-vuong-3477.html">
                                AnTuTu công bố bảng xếp hạng hiệu năng mới:
                                Snapdragon 888 vẫn chễm chệ ngôi vương!
                              </a>
                            </div>{" "}
                            <div className="flex items-center space-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-gray-100 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                />
                              </svg>{" "}
                              <a
                                href="/antutu-cong-bo-bang-xep-hang-hieu-nang-moi-snapdragon-888-van-chem-che-ngoi-vuong-3477.html#article-comments"
                                className="text-dark-gray text-xs md:text-sm leading-none"
                              >
                                0 Bình luận
                              </a>{" "}
                              <span className="text-xs md:text-sm text-gray-medium leading-none">
                                5 tháng trước
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-3 md:space-x-5 pb-4 border-solid border-b border-gray-light last:border-b-0 last:pb-0">
                          <div className="thumnail-post w-100px md:w-106px">
                            <a href="/day-la-mot-trong-nhung-dieu-bat-ngo-nhat-ve-wwdc-2021-3480.html">
                              <div>
                                <img
                                  data-src="https://api.thinkview.vn/uploads/backend/2021/6/8/thumb-iphone-6s-ios-15-support-horizontal.jpg"
                                  alt="Đây là một trong những điều bất ngờ nhất về WWDC 2021"
                                  width={384}
                                  height={230}
                                  src="/default-image.jpg"
                                />
                              </div>
                            </a>
                          </div>{" "}
                          <div className="flex-1 blog-item-info">
                            <div className="mb-2 font-medium text-pearl text-base leading-normal">
                              <a href="/day-la-mot-trong-nhung-dieu-bat-ngo-nhat-ve-wwdc-2021-3480.html">
                                Đây là một trong những điều bất ngờ nhất về WWDC
                                2021
                              </a>
                            </div>{" "}
                            <div className="flex items-center space-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-gray-100 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-comment"
                                />
                              </svg>{" "}
                              <a
                                href="/day-la-mot-trong-nhung-dieu-bat-ngo-nhat-ve-wwdc-2021-3480.html#article-comments"
                                className="text-dark-gray text-xs md:text-sm leading-none"
                              >
                                0 Bình luận
                              </a>{" "}
                              <span className="text-xs md:text-sm text-gray-medium leading-none">
                                5 tháng trước
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="mb-6 -mx-4 md:mx-0 md:mb-10">
                  <div className="bg-gray-light p-4 xl:p-13 xl:pt-6">
                    <div className="flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-icons"
                        style={{ width: "64px", height: "15px" }}
                      >
                        <use
                          href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-sponsor"
                          xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-sponsor"
                        />
                      </svg>{" "}
                      {/**/}
                    </div>{" "}
                    <div>
                      <a
                        href="https://vn.msi.com/Promotion/Gaming-PC-Back-to-School-2021"
                        target="_blank"
                      >
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="/banners/msi/Banner_BTS-2021-2nd_(W1273xH282px).jpeg"
                          />{" "}
                          <source
                            media="(min-width: 768px)"
                            srcSet="/banners/msi/Banner_BTS-2021-2nd_(W1273xH282px).jpeg"
                          />{" "}
                          <img
                            src="/default-image.jpg"
                            alt="banner sponsor"
                            width={1148}
                            height={250}
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                <div className="mb-6 md:mb-10">
                  <div className="xl:flex -mx-10px">
                    <div className="mb-6 md:mb-0 xl:w-8/12 px-10px">
                      {/**/} {/**/}
                    </div>{" "}
                    {/**/}
                  </div>
                </div>{" "}
                <div className="mb-6 -mx-4 md:mx-0 md:mb-10">
                  <div className="bg-gray-light p-4 xl:p-13 xl:pt-6">
                    <div className="flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-icons"
                        style={{ width: "64px", height: "15px" }}
                      >
                        <use
                          href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-sponsor"
                          xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-sponsor"
                        />
                      </svg>{" "}
                      {/**/}
                    </div>{" "}
                    <div>
                      <a
                        href="https://vn.rog.gg/Zephyrus_G14AW"
                        target="_blank"
                      >
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="/banners/asus/Windows_G14AW_2390x530_Thinkview.jpg"
                          />{" "}
                          <source
                            media="(min-width: 768px)"
                            srcSet="/banners/asus/Windows_G14AW_2390x530_Thinkview.jpg"
                          />{" "}
                          <img
                            src="/default-image.jpg"
                            alt="banner sponsor"
                            width={1148}
                            height={250}
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="pb-1 mb-0 bg-right-bottom has-bg-img md:mb-10 bg-dark-blue">
                <div className="container">
                  <div className="xl:flex -mx-10px">
                    <div className="xl:w-8/12 px-10px">
                      <div className="h-full py-4 xl:pr-10 xl:py-10 bg-dark-blue">
                        <div>
                          <div className="font-bold text-xl md:text-xl xl:text-28px text-white pl-2 pb-1 mb-6 md:mb-5 relative leading-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute left-0 bottom-0 z-0 w-4 h-4 xl:w-22px xl:h-22px icon icon-icons"
                            >
                              <use
                                href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-title"
                                xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-title"
                              />
                            </svg>{" "}
                            <a href="/cong-nghe-so" className="relative">
                              Công Nghệ Số
                            </a>
                          </div>{" "}
                          <div className="mb-22px">
                            <div className="overflow-auto w-full whitespace-no-wrap flex flex-no-wrap items-center text-white text-base space-x-3 ">
                              <div className="flex items-center hover:text-green-spring">
                                <a href="/cong-nghe-so/mobile">Mobile</a>{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-3 w-1 h-1 text-gray icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                  />
                                </svg>
                              </div>
                              <div className="flex items-center hover:text-green-spring">
                                <a href="/cong-nghe-so/laptop-pc">
                                  Laptop &amp; PC
                                </a>{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-3 w-1 h-1 text-gray icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                  />
                                </svg>
                              </div>
                              <div className="flex items-center hover:text-green-spring">
                                <a href="/cong-nghe-so/gear">Gear</a>{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-3 w-1 h-1 text-gray icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                  />
                                </svg>
                              </div>
                              <div className="flex items-center hover:text-green-spring">
                                <a href="/cong-nghe-so/khoa-hoc">Khoa học</a>{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-3 w-1 h-1 text-gray icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                  />
                                </svg>
                              </div>
                              <div className="flex items-center hover:text-green-spring">
                                <a href="/cong-nghe-so/xe">Xe</a>{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-3 w-1 h-1 text-gray icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                  />
                                </svg>
                              </div>{" "}
                              <div className="text-gray-medium hover:text-green-spring leading-none">
                                <a
                                  href="/cong-nghe-so"
                                  className="flex items-center"
                                >
                                  <span>Tất cả</span>{" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-2 h-2 ml-1 icon icon-icons"
                                  >
                                    <use
                                      href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                      xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="md:flex md:space-x-5">
                            <div className="mb-4 md:w-6/12 md:mb-0">
                              <span
                                className="skeleton-box h-4 md:h-full"
                                style={{ width: "384px" }}
                              />
                            </div>{" "}
                            <div className="md:w-6/12">
                              <div className="pb-4 mb-4 border-solid border-b border-white border-opacity-15 md:border-b-0 md:mb-30px md:pb-0">
                                <span
                                  className="skeleton-box h-56 md:h-56"
                                  style={{ width: "100%" }}
                                />
                              </div>{" "}
                              <div className="space-y-5">
                                <div className="flex items-start space-x-3 md:space-x-5 pb-5 border-solid border-b border-white border-opacity-15 last:border-b-0 last:pb-0">
                                  <span
                                    className="skeleton-box h-16 md:h-16"
                                    style={{ width: "106px" }}
                                  />{" "}
                                  <div className="flex-1 blog-item-info">
                                    <div className="mb-2">
                                      <span
                                        className="skeleton-box h-4 md:h-8"
                                        style={{ width: "100%" }}
                                      />
                                    </div>{" "}
                                    <span
                                      className="skeleton-box h-4 md:h-4"
                                      style={{ width: "29%" }}
                                    />
                                  </div>
                                </div>
                                <div className="flex items-start space-x-3 md:space-x-5 pb-5 border-solid border-b border-white border-opacity-15 last:border-b-0 last:pb-0">
                                  <span
                                    className="skeleton-box h-16 md:h-16"
                                    style={{ width: "106px" }}
                                  />{" "}
                                  <div className="flex-1 blog-item-info">
                                    <div className="mb-2">
                                      <span
                                        className="skeleton-box h-4 md:h-8"
                                        style={{ width: "100%" }}
                                      />
                                    </div>{" "}
                                    <span
                                      className="skeleton-box h-4 md:h-4"
                                      style={{ width: "23%" }}
                                    />
                                  </div>
                                </div>
                                <div className="flex items-start space-x-3 md:space-x-5 pb-5 border-solid border-b border-white border-opacity-15 last:border-b-0 last:pb-0">
                                  <span
                                    className="skeleton-box h-16 md:h-16"
                                    style={{ width: "106px" }}
                                  />{" "}
                                  <div className="flex-1 blog-item-info">
                                    <div className="mb-2">
                                      <span
                                        className="skeleton-box h-4 md:h-8"
                                        style={{ width: "100%" }}
                                      />
                                    </div>{" "}
                                    <span
                                      className="skeleton-box h-4 md:h-4"
                                      style={{ width: "20%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="py-4 xl:w-4/12 xl:py-10 px-10px">
                      <div className="xl:pl-5">
                        <div>
                          <div className="font-bold text-xl md:text-xl xl:text-28px text-white pl-2 pb-1 mb-6 md:mb-5 relative leading-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="absolute left-0 bottom-0 z-0 w-4 h-4 xl:w-22px xl:h-22px icon icon-icons"
                            >
                              <use
                                href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-title-1"
                                xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-title-1"
                              />
                            </svg>{" "}
                            <a href="/review" className="relative">
                              Review
                            </a>
                          </div>{" "}
                          <div className="mb-22px">
                            <div className="flex items-center text-white text-base space-x-3">
                              <div className="flex items-center hover:text-green-spring">
                                <a href="/review/smartphone">Smartphone</a>{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-3 w-1 h-1 text-gray icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                  />
                                </svg>
                              </div>
                              <div className="flex items-center hover:text-green-spring">
                                <a href="/review/laptop-pc">Laptop &amp; PC</a>{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ml-3 w-1 h-1 text-gray icon icon-icons"
                                >
                                  <use
                                    href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                    xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-dot"
                                  />
                                </svg>
                              </div>{" "}
                              <div className="text-gray-medium hover:text-green-spring leading-none">
                                <a href="/review" className="flex items-center">
                                  <span>Tất cả</span>{" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-2 h-2 ml-1 icon icon-icons"
                                  >
                                    <use
                                      href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                      xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>{" "}
                          <div>
                            <div className="pb-4 mb-4 border-solid border-b border-white border-opacity-15 md:border-b-0 md:mb-30px md:pb-0">
                              <span
                                className="skeleton-box h-56 md:h-56"
                                style={{ width: "100%" }}
                              />
                            </div>{" "}
                            <div className="space-y-5">
                              <div className="flex items-start space-x-3 md:space-x-5 pb-5 border-solid border-b border-white border-opacity-15 last:border-b-0 last:pb-0">
                                <span
                                  className="skeleton-box h-16 md:h-16"
                                  style={{ width: "106px" }}
                                />{" "}
                                <div className="flex-1 blog-item-info">
                                  <div className="mb-2">
                                    <span
                                      className="skeleton-box h-4 md:h-8"
                                      style={{ width: "100%" }}
                                    />
                                  </div>{" "}
                                  <span
                                    className="skeleton-box h-4 md:h-4"
                                    style={{ width: "29%" }}
                                  />
                                </div>
                              </div>
                              <div className="flex items-start space-x-3 md:space-x-5 pb-5 border-solid border-b border-white border-opacity-15 last:border-b-0 last:pb-0">
                                <span
                                  className="skeleton-box h-16 md:h-16"
                                  style={{ width: "106px" }}
                                />{" "}
                                <div className="flex-1 blog-item-info">
                                  <div className="mb-2">
                                    <span
                                      className="skeleton-box h-4 md:h-8"
                                      style={{ width: "100%" }}
                                    />
                                  </div>{" "}
                                  <span
                                    className="skeleton-box h-4 md:h-4"
                                    style={{ width: "22%" }}
                                  />
                                </div>
                              </div>
                              <div className="flex items-start space-x-3 md:space-x-5 pb-5 border-solid border-b border-white border-opacity-15 last:border-b-0 last:pb-0">
                                <span
                                  className="skeleton-box h-16 md:h-16"
                                  style={{ width: "106px" }}
                                />{" "}
                                <div className="flex-1 blog-item-info">
                                  <div className="mb-2">
                                    <span
                                      className="skeleton-box h-4 md:h-8"
                                      style={{ width: "100%" }}
                                    />
                                  </div>{" "}
                                  <span
                                    className="skeleton-box h-4 md:h-4"
                                    style={{ width: "24%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="container">
                <div className="flex flex-col mb-6 md:flex-row -mx-10px md:mb-10">
                  <div className="mb-6 md:mb-0 xl:w-8/12 px-10px">
                    {/**/} {/**/}
                  </div>{" "}
                  {/**/}
                </div>
              </div>{" "}
              {/**/}{" "}
              <div className="container pb-6 md:pb-10">
                <div className="flex flex-col md:flex-row -mx-10px">
                  <div className="mb-6 md:mb-0 xl:w-8/12 px-10px">
                    <div>
                      {/**/} {/**/}
                    </div>{" "}
                    <div>
                      <div className="flex items-center justify-center py-6 mt-8 text-2xl font-medium leading-none text-center cursor-pointer btn-loadmore xl:mr-5 xl:text-4xl bg-gray-light text-dark-blue hover:text-blue">
                        <span className="mr-2">Xem thêm</span>
                      </div>{" "}
                      {/**/} {/**/}
                    </div>
                  </div>{" "}
                  {/**/}
                </div>
              </div>
            </main>{" "}
            <div className="container my-auto" style={{ display: "none" }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-center pt-6 pb-8 md:pt-24 md:pb-64">
                <div className="content-not-found no-internet order-last md:order-first">
                  <h4 className="text-dark-blue text-2xl font-medium mb-4">
                    Không có internet
                  </h4>{" "}
                  <p className="mb-8">Hãy thử các cách sau</p>{" "}
                  <ul className="list-disc list-inside">
                    <li>
                      Kiểm tra lại cáp mạng, modem hoặc gọi hỗ trợ từ Nhà cung
                      cấp mạng bạn đang sử dụng
                    </li>{" "}
                    <li>Thử kết nối lại đường truyền internet</li>
                  </ul>
                </div>{" "}
                <img
                  src="/no-internet.svg"
                  alt="No Internet"
                  width={145}
                  height={156}
                  className="order-first md:order-last img-no-internet"
                />
              </div>
            </div>{" "}
            <footer className="bg-dark-blue">
              <div className="container">
                <div className="pt-6 xl:flex md:pt-12 md:pb-10 footer-top">
                  <div className="xl:w-3/12 text-28px font-medium">
                    <div className="text-white leading-140">Hello, we are</div>{" "}
                    <div className="text-green-spring leading-none">
                      ThinkView.
                    </div>
                  </div>{" "}
                  <div className="xl:w-9/12 flex mt-5 xl:mt-0">
                    <div className="md:w-3/12 xl:w-3/12">
                      <div className="text-xl xl:text-2xl text-white leading-140 font-medium mb-3 hover:text-green-spring">
                        <a href="/cong-nghe-so">Công Nghệ Số</a>
                      </div>{" "}
                      <div className="text-light-gray text-sm leading-150 hidden md:block">
                        <ul className="space-y-3">
                          <li className="hover:text-green-spring">
                            <a href="/cong-nghe-so/mobile">Mobile</a>
                          </li>
                          <li className="hover:text-green-spring">
                            <a href="/cong-nghe-so/laptop-pc">
                              Laptop &amp; PC
                            </a>
                          </li>
                          <li className="hover:text-green-spring">
                            <a href="/cong-nghe-so/gear">Gear</a>
                          </li>
                          <li className="hover:text-green-spring">
                            <a href="/cong-nghe-so/khoa-hoc">Khoa học</a>
                          </li>
                          <li className="hover:text-green-spring">
                            <a href="/cong-nghe-so/xe">Xe</a>
                          </li>{" "}
                          <li className="text-gray-medium hover:text-green-spring leading-none font-medium text-xs">
                            <a
                              href="/cong-nghe-so"
                              className="flex items-center"
                            >
                              <span>Tất cả</span>{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-2 h-2 ml-1 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-3/12 xl:w-3/12">
                      <div className="text-xl xl:text-2xl text-white leading-140 font-medium mb-3 hover:text-green-spring">
                        <a href="/review">Review</a>
                      </div>{" "}
                      <div className="text-light-gray text-sm leading-150 hidden md:block">
                        <ul className="space-y-3">
                          <li className="hover:text-green-spring">
                            <a href="/review/smartphone">Smartphone</a>
                          </li>
                          <li className="hover:text-green-spring">
                            <a href="/review/laptop-pc">Laptop &amp; PC</a>
                          </li>
                          <li className="hover:text-green-spring">
                            <a href="/review/phu-kien">Phụ kiện</a>
                          </li>{" "}
                          <li className="text-gray-medium hover:text-green-spring leading-none font-medium text-xs">
                            <a href="/review" className="flex items-center">
                              <span>Tất cả</span>{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-2 h-2 ml-1 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-3/12 xl:w-3/12">
                      <div className="text-xl xl:text-2xl text-white leading-140 font-medium mb-3 hover:text-green-spring">
                        <a href="/goc-nhin">Góc Nhìn</a>
                      </div>{" "}
                      {/**/}
                    </div>
                    <div className="md:w-3/12 xl:w-3/12">
                      <div className="text-xl xl:text-2xl text-white leading-140 font-medium mb-3 hover:text-green-spring">
                        <a href="/kien-thuc">Kiến Thức</a>
                      </div>{" "}
                      <div className="text-light-gray text-sm leading-150 hidden md:block">
                        <ul className="space-y-3">
                          <li className="hover:text-green-spring">
                            <a href="/kien-thuc/giai-thich">Giải thích</a>
                          </li>
                          <li className="hover:text-green-spring">
                            <a href="/kien-thuc/huong-dan-toi-uu">
                              Hướng dẫn &amp; Tối ưu
                            </a>
                          </li>
                          <li className="hover:text-green-spring">
                            <a href="/kien-thuc/tu-van">Tư vấn</a>
                          </li>
                          <li className="hover:text-green-spring">
                            <a href="/kien-thuc/thu-nghiem">Thử nghiệm</a>
                          </li>{" "}
                          <li className="text-gray-medium hover:text-green-spring leading-none font-medium text-xs">
                            <a href="/kien-thuc" className="flex items-center">
                              <span>Tất cả</span>{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-2 h-2 ml-1 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-arrow-right"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="copyright border-t border-b border-solid border-white border-opacity-15 pt-6 pb-8">
                <div className="container block xl:flex xl:items-center">
                  <div className="block md:flex items-center">
                    <div className="text-white text-xs leading-140 space-x-6 flex items-center">
                      <a
                        href="/ve-chung-toi"
                        className="hover:text-green-spring"
                      >
                        Về chúng tôi
                      </a>{" "}
                      <a
                        href="/ve-chung-toi#lien-he"
                        className="hover:text-green-spring"
                      >
                        Liên hệ
                      </a>
                    </div>{" "}
                    <div className="text-white text-xs flex items-center mb-10 mt-6 md:mb-0 md:mt-0 md:space-x-6 md:pl-6 md:ml-6 md:border-l border-solid border-gray">
                      <div className="text-gray-medium hidden md:inline-block">
                        Follow us
                      </div>{" "}
                      <div>
                        <ul className="flex items-center space-x-6">
                          <li>
                            <a
                              href="https://www.fb.com/groups/ThinkView/"
                              target="_blank"
                              className="flex items-center hover:text-green-spring"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-facebook"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-facebook"
                                />
                              </svg>{" "}
                              <span className="hidden xl:inline-block">
                                Facebook
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/thinkview"
                              target="_blank"
                              className="flex items-center hover:text-green-spring"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-youtube"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-youtube"
                                />
                              </svg>{" "}
                              <span className="hidden xl:inline-block">
                                Youtube
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/think.view/"
                              target="_blank"
                              className="flex items-center hover:text-green-spring"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-instagram"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-instagram"
                                />
                              </svg>{" "}
                              <span className="hidden xl:inline-block">
                                Instagram
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/ViewThink"
                              target="_blank"
                              className="flex items-center hover:text-green-spring"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-twitter"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-twitter"
                                />
                              </svg>{" "}
                              <span className="hidden xl:inline-block">
                                Twitter
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="mailto:hello@thinkview.vn"
                              target="_blank"
                              className="flex items-center hover:text-green-spring"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 mr-2 icon icon-icons"
                              >
                                <use
                                  href="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-mail"
                                  xlinkHref="/_nuxt/b5c9b796a386ffd44522d8e9b85d90c4.svg#i-icon-mail"
                                />
                              </svg>{" "}
                              <span className="hidden xl:inline-block">
                                hello@thinkview.vn
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="mt-4 xl:mt-0 xl:ml-auto text-gray-medium text-xs leading-140">
                    Phát triển bởi đội ngũ ThinkView, bằng cả con tim.
                  </div>
                </div>
              </div>{" "}
              <div>
                <div className="container text-gray-medium text-10px py-4">
                  Giấy phép thiết lập MXH số 412/GP-BTTTT, Ký ngày: 30/09/2019 •
                  Quản lý nội dung: Lê Lam Linh • Công ty TNHH Công Nghệ Think
                  Việt Nam • Địa chỉ: Số 105/562 đường Láng, phường Láng Hạ,
                  quận Đống Đa, thành phố Hà Nội • Số điện thoại: 0984696324
                </div>
              </div>
            </footer>{" "}
            {/**/}
          </div>
        </div>
      </div>
    );
  }
}
