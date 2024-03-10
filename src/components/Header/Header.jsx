import React from "react";
import "./Header.css"

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header-left">
                <a href="#">
                    <img src={props.img} />
                </a>
            </div>
            <div className="header-center">
                <button className="main-button">главная</button>
                <button className="event-button">Sofit event house</button>
                <button className="normal-button">мероприятия</button>
                <button className="normal-button">туристам</button>
                <button className="normal-button">кейтеринг</button>
                <button className="normal-button">для агенств</button>
            </div>
            <div className="header-right">
            <button className="hamburger-button">
                    <span></span>
                </button>
            </div>
        </div>
    );
};

export default Header;