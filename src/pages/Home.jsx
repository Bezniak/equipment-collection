import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import Advantages from "../components/Advantages/Advantages.jsx";
import Process from "../components/Process/Process.jsx";
import Service from "../components/Service/Service.jsx";
import NextStep from "../components/RecyclingProcess/RecyclingProcess.jsx";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Advantages/>
            <Process/>
            <Service/>
            <NextStep/>
        </div>
    );
};

export default Home;