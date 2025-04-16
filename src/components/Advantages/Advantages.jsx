import React from "react";
import {
    FaBolt,
    FaClock,
    FaHandHoldingUsd,
    FaMoneyBillWave,
    FaRecycle,
    FaTruck,
} from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Advantages = () => {
    const { t } = useTranslation();

    const advantages = [
        {
            icon: FaTruck,
            title: "advantageTitle_1",
            desc: "advantageDesc_1",
            color: "text-yellow-400",
        },
        {
            icon: FaHandHoldingUsd,
            title: "advantageTitle_4",
            desc: "advantageDesc_4",
            color: "text-purple-400",
        },
        {
            icon: FaRecycle,
            title: "advantageTitle_2",
            desc: "advantageDesc_2",
            color: "text-green-400",
        },
        {
            icon: FaMoneyBillWave,
            title: "advantageTitle_3",
            desc: "advantageDesc_3",
            color: "text-blue-400",
        },
        {
            icon: FaBolt,
            title: "advantageTitle_5",
            desc: "advantageDesc_5",
            color: "text-red-400",
        },
        {
            icon: FaClock,
            title: "advantageTitle_6",
            desc: "advantageDesc_6",
            color: "text-orange-400",
        },
    ];

    return (
        <section
            className="flex flex-wrap bg-blue-900 text-white"
            aria-labelledby="advantages-title"
        >
            {/* Левая сторона (Контент) */}
            <div className="container mx-auto p-6 md:p-12 w-full md:w-1/2">
                <header>
                    <p className="mb-4 text-blue-300 uppercase tracking-widest flex items-center gap-3">
                        <BsDashLg className="size-6 md:size-8" />
                        {t("whyChooseUs")}
                    </p>
                    <h2
                        id="advantages-title"
                        className="text-2xl md:text-4xl font-bold mt-2"
                    >
                        {t("advantagesTitle")}
                    </h2>
                    <p className="mt-4 text-gray-300">{t("advantagesDesc")}</p>
                </header>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6"
                    role="list"
                    aria-label={t("advantagesList")}
                >
                    {advantages.map(({ icon: Icon, title, desc, color }, index) => {
                        const { ref, inView } = useInView({
                            triggerOnce: false,
                            threshold: 0.3,
                        });

                        return (
                            <motion.article
                                key={index}
                                ref={ref}
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 80 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex flex-col items-start p-2 md:p-4"
                                role="listitem"
                            >
                                <header className="flex items-center gap-3">
                                    <Icon className={`${color} text-2xl md:text-3xl`} />
                                    <h3 className="my-2 md:my-3 text-base md:text-lg font-semibold tracking-wider">
                                        {t(title)}
                                    </h3>
                                </header>
                                <p className="tracking-wider text-sm md:text-base text-gray-200">
                                    {t(desc)}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            {/* Правая сторона (Изображение) */}
            <figure className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center">
                <motion.img
                    src="/advantages.jpg"
                    alt={t("imageAlt_advantages") || "Recycling of electronics"}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </figure>
        </section>
    );
};

export default Advantages;
