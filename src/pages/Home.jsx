import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import Advantages from "../components/Advantages/Advantages.jsx";
import Process from "../components/Process/Process.jsx";
import Service from "../components/Service/Service.jsx";
import NextStep from "../components/RecyclingProcess/RecyclingProcess.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import FAQContactForm from "../components/FAQContactForm/FAQContactForm.jsx";
import ContactInfo from "../components/ContactInfo/ContactInfo.jsx";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Advantages/>
            <Process/>
            <Service/>
            <NextStep/>
            <Reviews/>
            <FAQContactForm/>
            <ContactInfo/>
        </div>
    );
};

export default Home;