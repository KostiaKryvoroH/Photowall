import React, {Components} from "react";

const Title = (props) => {
    return (
        <div className="header--text-box">
            <h1 className="header__title"> {props.title} </h1>
        </div>
    )
}


export default Title;