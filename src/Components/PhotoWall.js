import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const PhotoWall = (props) => {
    const screen = props.screen;

    return (
        <div>
            <Link className="btn add__icon" to="/AddPhoto">+</Link>
            {/* <button className="btn add__icon" onClick={() => {
                props.onChangeScreen('addPhoto')
            }}> + </button> */}
            <div className="photo-grid"> 
                {props.posts
                .sort(function(x, y) {
                    return y.id - x.id
                })
                .map((post, index) => <Photo key = {index} post = {post} {...props} index={index}/>)}
            </div>
        </div>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}


export default PhotoWall;