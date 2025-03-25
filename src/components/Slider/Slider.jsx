import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {motion} from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import {useTranslation} from "react-i18next";
import BookButton from "../BookButton/BookButton.jsx";
import {Autoplay, Pagination} from 'swiper/modules';

const sliderData = [
    {image: '/slider_1.jpg', titleKey: 'mainTitle_1'},
    {image: '/slider_2.jpg', titleKey: 'mainTitle_2'},
    {image: '/slider_3.jpg', titleKey: 'mainTitle_3'},
    {image: '/slider_4.jpg', titleKey: 'mainTitle_4'},
];

const Slider = () => {
    const {t} = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="relative overflow-hidden w-screen h-screen">
            <Swiper
                centeredSlides={true}
                loop={true}
                speed={2000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                style={{overflow: 'hidden'}}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full object-cover">
                        <div className="overlay"></div>
                        <img src={slide.image} alt={`slide-${index}`} className="w-full h-full object-cover"/>
                        <div
                            className="w-full md:w-1/2 p-5 z-40 flex flex-col items-center justify-evenly gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <motion.h1
                                className="mb-10 text-white text-center text-2xl md:text-3xl md:leading-13"
                                initial={{y: -100, opacity: 0}}
                                animate={currentSlide === index ? {y: 0, opacity: 1, scale: 1.1} : {
                                    y: -100,
                                    opacity: 0,
                                    scale: 1
                                }}
                                transition={{duration: 1.5}}
                            >
                                {t(slide.titleKey)}
                            </motion.h1>
                            <motion.div
                                initial={{y: 100, opacity: 0}}
                                animate={currentSlide === index ? {y: 0, opacity: 1} : {y: 100, opacity: 0}}
                                transition={{duration: 1, delay: 0.3}}
                            >
                                <BookButton title={t("book")}/>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
