import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import Advantages from "../components/Advantages/Advantages.jsx";
import Process from "../components/Process/Process.jsx";
import Service from "../components/Service/Service.jsx";
import NextStep from "../components/RecyclingProcess/RecyclingProcess.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import FAQContactForm from "../components/FAQContactForm/FAQContactForm.jsx";
import ContactInfo from "../components/ContactInfo/ContactInfo.jsx";
import MetaTags from "../common/MetaTags.jsx";

const Home = () => {
    return (
        <>
            <MetaTags page="meta.home" /> {/* Мета-теги для главной страницы */}
            <main>
                <Slider />
                <section aria-labelledby="advantages-title">
                    <Advantages />
                </section>
                <section aria-labelledby="process-title">
                    <Process />
                </section>
                <section aria-labelledby="service-title">
                    <Service />
                </section>
                <section aria-labelledby="next-step-title">
                    <NextStep />
                </section>
                <section aria-labelledby="reviews-title">
                    <Reviews />
                </section>
                <section aria-labelledby="faq-contact-form-title">
                    <FAQContactForm />
                </section>
                <section aria-labelledby="contact-info-title">
                    <ContactInfo />
                </section>
            </main>
        </>
    );
};

export default Home;
