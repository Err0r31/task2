import React, { useState } from "react";
import "./Carousel.css";
import Poster from "../Poster/Poster";

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        let newIndex = index;
        if (newIndex < 0) {
            newIndex = slides.length - 3;
        } else if (newIndex >= slides.length - 2) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        goToSlide(currentIndex + 1);
    };

    const goToPrevSlide = () => {
        goToSlide(currentIndex - 1);
    };

    return (
        <div className="carousel-container">
            <button className="carousel-control carousel-prev" onClick={goToPrevSlide}>&lt;</button>
            <div className="carousel-track-container">
                <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}>
                    {slides.map((slide, index) => (
                        <div className="carousel-slide" key={index}>
                            <Poster img={slide.img} title={slide.title} description={slide.description} />
                        </div>
                    ))}
                </div>
            </div>
            <button className="carousel-control carousel-next" onClick={goToNextSlide}>&gt;</button>
        </div>
    );
};

export default Carousel;
