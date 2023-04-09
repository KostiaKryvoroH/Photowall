import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Photo = (props) => {
    const navigate = useNavigate();
    const post = props.post;

   
    return (
        <figure className="photogrid__figure"> 
            <Link to={`/single/${post.id}`}>
            <img className="photogrid__figure--photo" src={post.imageLink} alt={post.description} />
            </Link>
            <figcaption> <p className="photogrid__figure--text">{post.description}</p>
            <div className="button__container">
                <button onClick={() => {
                    props.startRemovingPosts(props.index, post.id)
                    navigate('/')
                }} className="btn photogrid__figure--btn">remove</button>
                <Link className="btn" to={`/single/${post.id}`}>
                    <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {props.comments[post.id] ? props.comments[post.id].length : 0}
                    </div>
                </Link>
            </div>
            </figcaption>
        </figure>
    )
}

 
Photo.propTypes = {
    post: PropTypes.object.isRequired,
}


export default Photo;