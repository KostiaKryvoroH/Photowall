import React, { useEffect } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import '../style.css';
import { useState } from "react";
import Photo from "./Photo";
import AddPhoto from "./AddPhoto";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { removePost } from "../redux/actions";
import Single from "./Single";
import { Params } from "react-router-dom";
import { set } from "firebase/database";

const Main = (props) => {
    const navigate = useNavigate();   

    const [state, setState] = useState({loading: true})
    // var state = {loading: true}

    useEffect(() => {
        props.startLoadingPost().then(() => {
            setState({loading: false})
        });
        props.startLoadingComments();
    }, [])

    return (
        <div>
             <h1 className="header__title">
                <Link to='/'>PhotoWall</Link>
             </h1>
             <Routes>
                    <Route exact path ="/"  element={
                        <React.Fragment>
                            <PhotoWall {...props}/>
                        </React.Fragment> 
                    }/>                     
                    <Route path="/AddPhoto"  element={<AddPhoto {...props}/>} /> 
                    <Route path="/single/:id" element ={<Single loading = {state.loading} {...props} />}/>
            </Routes>
        </div>
    ) 
}




export default Main;