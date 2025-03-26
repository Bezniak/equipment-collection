import React from "react";
import {FaBolt, FaClock, FaHandHoldingUsd, FaRecycle, FaShieldAlt, FaTruck} from "react-icons/fa";
import {BsDashLg} from "react-icons/bs";
import {useTranslation} from "react-i18next";

const Advantages = () => {
    const {t} = useTranslation();

    const advantages = [
        {icon: FaTruck, title: "advantageTitle_1", desc: "advantageDesc_1", color: "text-yellow-400"},
        {icon: FaHandHoldingUsd, title: "advantageTitle_4", desc: "advantageDesc_4", color: "text-purple-400"},
        {icon: FaRecycle, title: "advantageTitle_2", desc: "advantageDesc_2", color: "text-green-400"},
        {icon: FaShieldAlt, title: "advantageTitle_3", desc: "advantageDesc_3", color: "text-blue-400"},
        {icon: FaBolt, title: "advantageTitle_5", desc: "advantageDesc_5", color: "text-red-400"},
        {icon: FaClock, title: "advantageTitle_6", desc: "advantageDesc_6", color: "text-orange-400"}
    ];

    return (
        <section className="flex flex-wrap bg-blue-900 text-white">
            {/* Левая сторона (Текст) */}
            <div className="container mx-auto p-6 md:p-12 w-full md:w-1/2">
                <p className="mb-4 text-blue-300 uppercase tracking-widest flex items-center gap-3">
                    <BsDashLg className="size-6 md:size-8"/>
                    {t("whyChooseUs")}
                </p>
                <h2 className="text-2xl md:text-4xl font-bold mt-2">
                    {t("advantagesTitle")}
                </h2>
                <p className="mt-4 text-gray-300">
                    {t("advantagesDesc")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6">
                    {advantages.map(({icon: Icon, title, desc, color}, index) => (
                        <div key={index} className="flex flex-col items-start p-2 md:p-4">
                            <div className="flex items-center gap-3">
                                <Icon className={`${color} text-2xl md:text-3xl`}/>
                                <h2 className="my-2 md:my-3 text-base md:text-lg tracking-wider">
                                    {t(title)}
                                </h2>
                            </div>
                            <p className="tracking-wider text-sm md:text-base">
                                {t(desc)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Правая сторона (Изображение) */}
            <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center">
                <img
                    src="/advantages.jpg"
                    alt="Электроника для утилизации"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default Advantages;
