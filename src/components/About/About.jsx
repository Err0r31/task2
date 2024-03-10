import React from "react";
import TextBlock from "../TextBlock/TextBlock";
import "./About.css"


const About = () => {
    return (
        <div className="about-container">
            <div className="about-up-container">
                <h1>о ресторане</h1>
                <figure>
                    <img src="https://i.ibb.co/6mdJ9GM/descr1.png"/>
                    <figcaption>летний дворец</figcaption>
                </figure>
            </div>
            <div className="about-down-container">
                <div className="player-container">
                    <div className="player">
                        <img src="https://i.ibb.co/YtYQJLT/Rectangle-2-2.png"/>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 0C17.9089 0 0 17.9086 0 40C0 62.0914 17.9089 80 40 80C62.0911 80 80 62.0914 80 40C80 17.9086 62.0911 0 40 0ZM53.825 42.1203L33.825 54.6203C33.4203 54.873 32.9602 55 32.5 55C32.0831 55 31.6656 54.8963 31.2878 54.6862C30.4931 54.2456 30 53.4094 30 52.5V27.5C30 26.5906 30.4931 25.7544 31.2878 25.3137C32.0825 24.8706 33.0542 24.8975 33.825 25.3797L53.825 37.8797C54.5556 38.3375 55 39.1383 55 40C55 40.8617 54.5556 41.6627 53.825 42.1203Z" fill="#D1A954" />
                        </svg>
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-left">
                        <img src="https://i.ibb.co/0DXbtPL/logo-big.png"/>
                        <br />
                        <p>Добро пожаловать в Летний Дворец!</p>
                        <br/>
                        <p>
                            Всего в 12 километрах от Петербурга, неподалеку от знаменитых фонтанов и парков Петергофа воплощен в жизнь один из самых грандиозных проектов event-индустрии России – ресторанный комплекс «Летний Дворец». Открытый в 2009 году, он объединил под одной крышей современный банкетный зал в исторических дворцовых интерьерах на 800 гостей и собственный кейтеринг.
                        </p>
                    </div>
                    <div className="info-right">
                        <div className="info-right-right">
                            <TextBlock
                                img="https://i.ibb.co/6mdJ9GM/descr1.png"
                                title="Площадка"
                                description="Сочетание классических интерьеров и современных технических возможностей выгодно отличают Летний Дворец от большинства других исторических площадок города."
                            />
                            <TextBlock
                                img="https://i.ibb.co/6mdJ9GM/descr1.png"
                                title="Площадка"
                                description="Сочетание классических интерьеров и современных технических возможностей выгодно отличают Летний Дворец от большинства других исторических площадок города."
                            />
                        </div>
                        <div className="info-right-left">
                            <TextBlock
                                img="https://i.ibb.co/6mdJ9GM/descr1.png"
                                title="Площадка"
                                description="Сочетание классических интерьеров и современных технических возможностей выгодно отличают Летний Дворец от большинства других исторических площадок города."
                            />
                            <TextBlock
                                img="https://i.ibb.co/6mdJ9GM/descr1.png"
                                title="Площадка"
                                description="Сочетание классических интерьеров и современных технических возможностей выгодно отличают Летний Дворец от большинства других исторических площадок города."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;