import React from "react";
import "./App.css"
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import TextBlock from "./components/TextBlock/TextBlock";


function App() {
    return (
        <div className="App">
            <header>
                <Header img="https://i.ibb.co/j5dJKk8/logo.png" />
            </header>
            <main>
                <Carousel slides={[
                    { img: "https://i.ibb.co/pPXP3vT/Rectangle-2-1.png", title: "заголовок 1", description: "описание 1" },
                    { img: "https://i.ibb.co/pPXP3vT/Rectangle-2-1.png", title: "заголовок 2", description: "описание 2" },
                    { img: "https://i.ibb.co/pPXP3vT/Rectangle-2-1.png", title: "заголовок 3", description: "описание 3" },
                    { img: "https://i.ibb.co/pPXP3vT/Rectangle-2-1.png", title: "заголовок 4", description: "описание 4" },
                    { img: "https://i.ibb.co/pPXP3vT/Rectangle-2-1.png", title: "заголовок 5", description: "описание 5" },
                ]} />
                <About />
            </main>
        </div>
  );
};

export default App;
