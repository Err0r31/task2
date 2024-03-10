import React from "react";
import "./Poster.css"

const Poster = (props) => {
    return (
        <div className="poster">
            <img src={props.img}/>
            <div className="poster-text-container">
                <div className="poster-border">
                    <div className="poster-text">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poster;