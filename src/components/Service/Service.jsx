import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes.js";
import { handleClick } from "../../common/helpers.js";
import { useTranslation } from "react-i18next";
import { BsDashLg } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
    const { t } = useTranslation();

    const services = [
        { icon: "🔌", title: t("types.fridge") },
        { icon: "📺", title: t("types.tv") },
        { icon: "🖥", title: t("types.laptop") },
        { icon: "📱", title: t("types.mobile") },
        { icon: "📠", title: t("types.office") },
        { icon: "🔊", title: t("types.audio") },
        { icon: "📷", title: t("types.photo") },
        { icon: "🎮", title: t("types.play") },
    ];

    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-4">
                    <p className="text-blue-600 uppercase tracking-widest flex items-center gap-3">
                        <BsDashLg className="size-6 md:size-8" />
                        {t("ourService")}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2">
                        <h1 className="text-4xl font-bold">{t("serviceTitle")}</h1>
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <svg
                                className="w-12 h-12 text-blue-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M12 2a5 5 0 00-5 5v1.28a2 2 0 00.88 1.66L10 11v2a2 2 0 00.44 1.28l-2.38 2.4A2 2 0 007 18h10a2 2 0 00-1.06-1.32l-2.38-2.4A2 2 0 0014 13v-2l2.12-1.06A2 2 0 0017 8.28V7a5 5 0 00-5-5zm0 2a3 3 0 013 3v1.28l-3 1.5-3-1.5V7a3 3 0 013-3zm-2.12 8h4.24l1.76 1.76A4 4 0 0117 18H7a4 4 0 011.12-2.24L9.88 12zM12 20a2 2 0 002-2H10a2 2 0 002 2z"
                                />
                            </svg>
                            <p className="text-blue-600 text-lg">{t("serviceDesc")}</p>
                        </div>
                    </div>
                </header>

                <section className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => {
                        const { ref, inView } = useInView({
                            triggerOnce: false,
                            threshold: 0.2,
                        });

                        return (
                            <motion.article
                                key={index}
                                ref={ref}
                                className="bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center items-center text-center p-4 aspect-square"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.2, delay: index * 0.2 }}
                            >
                                <span className="text-4xl md:text-5xl mb-2">{service.icon}</span>
                                <h3 className="text-sm md:text-lg font-semibold break-words">{service.title}</h3>
                            </motion.article>
                        );
                    })}
                </section>

                <footer className="mt-8">
                    <NavLink
                        to={ROUTES.SERVICES}
                        onClick={handleClick}
                        className="text-blue-600 text-lg font-semibold transition hover:text-orange-500"
                    >
                        {t("fullList")} →
                    </NavLink>
                </footer>
            </div>
        </section>
    );
};

export default Service;
