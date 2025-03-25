import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import Advantages from "../components/Advantages/Advantages.jsx";
import Process from "../components/Process/Process.jsx";
import Service from "../components/Service/Service.jsx";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Advantages/>
            <Process/>
            <Service/>
        </div>
    );
};

export default Home;