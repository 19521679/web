import React, { Component, useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
function ArticleDetail({ match }) {
    var pid = match.params.mabaiviet;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:5001/baiviet/${pid}`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            {
                posts.map(post => (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.noidung
                        }}></div>
                ))
            }
        </div>
    )
}

export default ArticleDetail

