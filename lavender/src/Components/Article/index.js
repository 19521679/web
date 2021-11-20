import React, { Component } from "react";
import "./style.css";
// import Product from "./Product.js";
// import { withRouter } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import * as cartAct from "../redux/actions/cartAct";
// import PropTypes from "prop-types";
class index extends Component {
    render() {
        return (
            <section>
                <div id="wrapper">
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                    <div className="page-wrapper">
                                        <div className="blog-top clearfix">
                                            <h4 className="pull-left">Recent News <a href="#"><i className="fa fa-rss" /></a></h4>
                                        </div>{/* end blog-top */}
                                        <div className="blog-list clearfix">
                                            <div className="blog-box row">
                                                <div className="col-md-4">
                                                    <div className="post-media">
                                                        <a href="tech-single.html" title>
                                                            <img src="https://logos-world.net/wp-content/uploads/2020/11/Google-Play-Logo-2015-2016.png" alt="" className="img-fluid" />
                                                            <div className="hovereffect" />
                                                        </a>
                                                    </div>{/* end media */}
                                                </div>{/* end col */}
                                                <div className="blog-meta big-meta col-md-8">
                                                    <h4><a href="tech-single.html" title>Top 10 phone applications and 2017 mobile design awards</a></h4>
                                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                                    <small>21 July, 2017</small>
                                                </div>{/* end meta */}
                                            </div>{/* end blog-box */}
                                        <hr className="invis" />
                                            <div className="blog-box row">
                                                <div className="col-md-4">
                                                    <div className="post-media">
                                                        <a href="tech-single.html" title>
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf31DuWP8Solr4UKfyG3TtscEbZ8m5WvLEyA&usqp=CAU" alt="" className="img-fluid" />
                                                            <div className="hovereffect" />
                                                        </a>
                                                    </div>{/* end media */}
                                                </div>{/* end col */}
                                                <div className="blog-meta big-meta col-md-8">
                                                    <h4><a href="tech-single.html" title>Top 10 phone applications and 2017 mobile design awards</a></h4>
                                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                                    <small>21 July, 2017</small>
                                                </div>{/* end meta */}
                                            </div>{/* end blog-box */}
                                        <hr className="invis" />
                                        </div>{/* end blog-list */}
                                    </div>{/* end page-wrapper */}
                                </div>{/* end col */}
                                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <div className="sidebar">
                                        <div className="widget">
                                            <div className="banner-spot clearfix">
                                                <div className="banner-img">
                                                    <img src="upload/banner_07.jpg" alt="" className="img-fluid" />
                                                </div>{/* end banner-img */}
                                            </div>{/* end banner */}
                                        </div>{/* end widget */}
                                        <div className="widget">
                                            <h2 className="widget-title">Trend Videos</h2>
                                            <div className="trend-videos">
                                                <div className="blog-box">
                                                    <div className="post-media">
                                                        <a href="tech-single.html" title>
                                                            <img src="upload/tech_video_01.jpg" alt="" className="img-fluid" />
                                                            <div className="hovereffect">
                                                                <span className="videohover" />
                                                            </div>{/* end hover */}
                                                        </a>
                                                    </div>{/* end media */}
                                                    <div className="blog-meta">
                                                        <h6><a href="tech-single.html" title>We prepared the best 10 laptop presentations for you</a></h6>
                                                    </div>{/* end meta */}
                                                </div>{/* end blog-box */}
                                                <hr className="invis" />
                                                <div className="blog-box">
                                                    <div className="post-media">
                                                        <a href="tech-single.html" title>
                                                            <img src="upload/tech_video_02.jpg" alt="" className="img-fluid" />
                                                            <div className="hovereffect">
                                                                <span className="videohover" />
                                                            </div>{/* end hover */}
                                                        </a>
                                                    </div>{/* end media */}
                                                    <div className="blog-meta">
                                                        <h4><a href="tech-single.html" title>We are guests of ABC Design Studio - Vlog</a></h4>
                                                    </div>{/* end meta */}
                                                </div>{/* end blog-box */}
                                                <hr className="invis" />
                                                <div className="blog-box">
                                                    <div className="post-media">
                                                        <a href="tech-single.html" title>
                                                            <img src="upload/tech_video_03.jpg" alt="" className="img-fluid" />
                                                            <div className="hovereffect">
                                                                <span className="videohover" />
                                                            </div>{/* end hover */}
                                                        </a>
                                                    </div>{/* end media */}
                                                    <div className="blog-meta">
                                                        <h4><a href="tech-single.html" title>Both blood pressure monitor and intelligent clock</a></h4>
                                                    </div>{/* end meta */}
                                                </div>{/* end blog-box */}
                                            </div>{/* end videos */}
                                        </div>{/* end widget */}
                                        <div className="widget">
                                            <h2 className="widget-title">Popular Posts</h2>
                                            <div className="blog-list-widget">
                                                <div className="list-group">
                                                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div className="w-100 justify-content-between">
                                                            <img src="upload/tech_blog_08.jpg" alt="" className="img-fluid float-left" />
                                                            <h5 className="mb-1">5 Beautiful buildings you need..</h5>
                                                            <small>12 Jan, 2016</small>
                                                        </div>
                                                    </a>
                                                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div className="w-100 justify-content-between">
                                                            <img src="upload/tech_blog_01.jpg" alt="" className="img-fluid float-left" />
                                                            <h5 className="mb-1">Let's make an introduction for..</h5>
                                                            <small>11 Jan, 2016</small>
                                                        </div>
                                                    </a>
                                                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div className="w-100 last-item justify-content-between">
                                                            <img src="upload/tech_blog_03.jpg" alt="" className="img-fluid float-left" />
                                                            <h5 className="mb-1">Did you see the most beautiful..</h5>
                                                            <small>07 Jan, 2016</small>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>{/* end blog-list */}
                                        </div>{/* end widget */}
                                        <div className="widget">
                                            <h2 className="widget-title">Recent Reviews</h2>
                                            <div className="blog-list-widget">
                                                <div className="list-group">
                                                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div className="w-100 justify-content-between">
                                                            <img src="upload/tech_blog_02.jpg" alt="" className="img-fluid float-left" />
                                                            <h5 className="mb-1">Banana-chip chocolate cake recipe..</h5>
                                                            <span className="rating">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div className="w-100 justify-content-between">
                                                            <img src="upload/tech_blog_03.jpg" alt="" className="img-fluid float-left" />
                                                            <h5 className="mb-1">10 practical ways to choose organic..</h5>
                                                            <span className="rating">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </span>
                                                        </div>
                                                    </a>
                                                    <a href="tech-single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div className="w-100 last-item justify-content-between">
                                                            <img src="upload/tech_blog_07.jpg" alt="" className="img-fluid float-left" />
                                                            <h5 className="mb-1">We are making homemade ravioli..</h5>
                                                            <span className="rating">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>{/* end blog-list */}
                                        </div>{/* end widget */}
                                    </div>{/* end sidebar */}
                                </div>{/* end col */}
                            </div>{/* end row */}
                        </div>{/* end container */}
                    </section>
                </div>

            </section>
        );
    }
}

export default index;