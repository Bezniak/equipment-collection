import React, {useEffect, useRef, useState} from "react";
import {Card} from "flowbite-react";
import {StarIcon} from "flowbite-react/icons/star-icon";
import {ChevronLeftIcon} from "flowbite-react/icons/chevron-left-icon";
import {ChevronRightIcon} from "flowbite-react/icons/chevron-right-icon";
import {FaUserCircle} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const reviews = [
    {
        id: 1,
        text: "Прекрасный сервис! Приехали быстро, забрали всю технику прямо из квартиры. Очень удобно!",
        author: "Андрей",
        role: "Клиент",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5
    },
    {
        id: 2,
        text: "Никогда не знала, что можно так легко избавиться от старого холодильника. Рекомендую всем!",
        author: "Ольга",
        role: "Клиент",
        avatar: "",
        rating: 4
    },
    {
        id: 3,
        text: "Заказывали вывоз офисной техники для нашей компании. Всё прошло быстро и без проблем. Спасибо!",
        author: "Иван",
        role: "Предприниматель",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 5
    },
    {
        id: 4,
        text: "Очень вежливый персонал. Всё сделали аккуратно и качественно!",
        author: "Марина",
        role: "Клиент",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 4
    },
    {
        id: 5,
        text: "Отличная работа, избавился от старого телевизора без хлопот!",
        author: "Сергей",
        role: "Клиент",
        avatar: "",
        rating: 5
    },
    {
        id: 6,
        text: "Спасибо за быструю работу! Всё вынесли аккуратно, мусора не осталось.",
        author: "Екатерина",
        role: "Клиент",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        rating: 5
    },
    {
        id: 7,
        text: "Вывезли старую стиральную машину очень оперативно. Доволен сервисом!",
        author: "Алексей",
        role: "Клиент",
        avatar: "",
        rating: 4
    },
    {
        id: 8,
        text: "Супер услуга, избавилась от ненужной бытовой техники за 10 минут! Спасибо!",
        author: "Дарья",
        role: "Клиент",
        avatar: "",
        rating: 5
    },
    {
        id: 9,
        text: "Очень удобный сервис! Не пришлось искать грузчиков, всю технику вынесли за меня.",
        author: "Максим",
        role: "Клиент",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        rating: 5
    },
    {
        id: 10,
        text: "Быстро и профессионально вывезли старый холодильник. Рекомендую всем!",
        author: "Наталья",
        role: "Клиент",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        rating: 5
    },
];


const Reviews = () => {
    const {t} = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            const activeSlide = sliderRef.current.children[currentIndex];
            if (activeSlide) {
                const offsetLeft = activeSlide.offsetLeft;
                const sliderWidth = sliderRef.current.offsetWidth;
                const activeWidth = activeSlide.offsetWidth;

                sliderRef.current.scrollTo({
                    left: offsetLeft - (sliderWidth / 2) + (activeWidth / 2),
                    behavior: "smooth"
                });
            }
        }
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="w-full mx-auto py-20 text-center relative overflow-hidden">
            <h2 className="w-full p-5 mx-auto text-3xl font-bold mb-6 flex justify-center gap-12 items-center">
                <button onClick={prevSlide} className="p-3 bg-blue-600 rounded-full hover:bg-blue-800 transition">
                    <ChevronLeftIcon className="w-6 h-6 text-white"/>
                </button>
                <span>Отзывы наших клиентов</span>
                <button onClick={nextSlide} className="p-3 bg-blue-600 rounded-full hover:bg-blue-800 transition">
                    <ChevronRightIcon className="w-6 h-6 text-white"/>
                </button>
            </h2>
            <div ref={sliderRef} className="flex gap-6 overflow-hidden scroll-smooth no-scrollbar">
                {reviews.map((review, index) => (
                    <div key={review.id}
                         className={`flex-shrink-0 w-80 transition-opacity duration-300 ${index === currentIndex ? '' : 'opacity-90'}`}>
                        <Card className="p-6 shadow-lg rounded-xl h-full flex flex-col !bg-gray-900">
                            <div className="grid grid-rows-[auto_auto_1fr_auto] gap-3">
                                <div className="flex items-center space-x-4">
                                    {review.avatar ? (
                                        <img
                                            src={review.avatar}
                                            alt={review.author}
                                            className="w-14 h-14 rounded-full"
                                            onError={(e) => (e.target.style.display = "none")}
                                        />
                                    ) : (
                                        <FaUserCircle className="w-14 h-14 text-gray-400"/>
                                    )}
                                    <div>
                                        <h3 className="text-lg text-white text-left font-semibold">
                                            {review.author}
                                        </h3>
                                        <p className="text-gray-500 text-left text-sm">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-white overflow-hidden text-ellipsis flex-grow text-justify">
                                    {review.text}
                                </p>
                                <div className="flex justify-start mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i}
                                                  className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}/>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
