import React from "react";
import "./TextBlock.css"

const TextBlock = (props) => {
    return (
        <div className="text-block-container">
            <div className="text-block-top">
                <img src={props.img} />
                <h4>{props.title}</h4>
            </div>
            <p>{props.description}</p>
        </div>
    );
};

export default TextBlock;