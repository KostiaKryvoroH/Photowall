import React from "react";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = (props) => {
    const id = Number(useParams().id);
    const post = props.posts.find((item) => item.id === id);
    const comments = props.comments[id] || [];
    const index = props.posts.findIndex((post) => post.id === id);
    if (props.loading === true) {
        return <div className="Loader">...Loading</div>
    } else if (post) {
        return (
            <div className="single-photo">
                <Photo key={id} post = {post} {...props} index={index}/>
                <Comments startAddingCommnets={props.startAddingCommnets} comments = {comments} id = {id}/>
            </div>
        )     
    } else {
        return <h1 className="header__title">...no post found</h1>
    }
}
 
 
export default Single; 