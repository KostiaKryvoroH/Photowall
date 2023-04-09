import React from "react";
import { useNavigate } from 'react-router-dom';



const AddPhoto = (props) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const image =  event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: image            
        }
        if (description && image) {
            props.startAddingPost(post);
            navigate('/')

        }
        // props.onAddPhoto(post); 

    }
    return (
        <div>
            <div>
                <form className="form--container" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button className="btn add__icon">Post</button>
                </form>
            </div>
        </div>
    )
}


export default AddPhoto;