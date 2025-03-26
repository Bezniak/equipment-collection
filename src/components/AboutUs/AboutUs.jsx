import React from "react";
import {useTranslation} from "react-i18next";
import {BsDashLg} from "react-icons/bs";
import {FaCheckCircle} from "react-icons/fa";
import HowWeWork from "./HowWeWork.jsx";
import ContactInfo from "../ContactInfo/ContactInfo.jsx";
import {motion} from "framer-motion"; // Import framer-motion

export default function AboutUs() {
    const {t} = useTranslation();

    return (
        <div className="bg-white">
            <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 text-center">
                <div className="h-96 max-w-4xl mx-auto flex items-center justify-center">
                    <motion.h1
                        className="text-4xl"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1}}
                        viewport={{once: false}}
                    >
                        {t("about")}
                    </motion.h1>
                </div>
            </div>
            <div
                className="container mx-auto p-5 md:py-20 md:px-10 rounded-lg flex flex-col md:flex-row items-center relative"
            >
                <div className="md:w-2/3">
                    <motion.p
                        className="mb-4 text-blue-600 uppercase tracking-widest flex items-center gap-3"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1, delay: 0.2}}
                        viewport={{once: false}}
                    >
                        <BsDashLg className="size-6 md:size-8"/>
                        {t("about")}
                    </motion.p>
                    <motion.h2
                        className="text-4xl"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1, delay: 0.3}}
                        viewport={{once: false}}
                    >
                        {t("aboutUsTitle")}
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-gray-600 leading-9"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1, delay: 0.4}}
                        viewport={{once: false}}
                    >
                        {t("aboutDesc_1")}
                    </motion.p>
                    <motion.p
                        className="mt-4 text-gray-600 leading-9"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1, delay: 0.5}}
                        viewport={{once: false}}
                    >
                        {t("aboutDesc_2")}
                    </motion.p>
                    <motion.ul
                        className="mt-6 space-y-4"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1, delay: 0.6}}
                        viewport={{once: false}}
                    >
                        <motion.li
                            className="flex items-start gap-3 text-gray-700"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 1, delay: 0.7}}
                            viewport={{once: false}}
                        >
                            <FaCheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0"/>
                            <span>
                <strong>{t("aboutBenefitTitle_1")}</strong>
                                {t("aboutBenefitDesc_1")}
              </span>
                        </motion.li>
                        <motion.li
                            className="flex items-start gap-3 text-gray-700"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 1, delay: 0.8}}
                            viewport={{once: false}}
                        >
                            <FaCheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0"/>
                            <span>
                <strong>{t("aboutBenefitTitle_2")}</strong>
                                {t("aboutBenefitDesc_2")}
              </span>
                        </motion.li>
                        <motion.li
                            className="flex items-start gap-3 text-gray-700"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 1, delay: 0.9}}
                            viewport={{once: false}}
                        >
                            <FaCheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0"/>
                            <span>
                <strong>{t("aboutBenefitTitle_3")}</strong>
                                {t("aboutBenefitDesc_3")}
              </span>
                        </motion.li>
                    </motion.ul>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
                    <motion.img
                        src="/aboutUs.jpg"
                        alt="Award Badge"
                        className="rounded-lg shadow-md"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1, delay: 1}}
                        viewport={{once: false}}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 transform translate-y-1/2 bg-blue-600 text-white px-4 py-8 md:px-8 md:py-8 rounded-lg text-center shadow-lg"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1, delay: 1.1}}
                        viewport={{once: false}}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold">30K+</h3>
                        <p>{t("unitsEquipment")}</p>
                        <h3 className="text-2xl md:text-3xl font-bold mt-5">15K+</h3>
                        <p>{t("satisfiedClients")}</p>
                    </motion.div>
                </div>
            </div>
            <HowWeWork/>
            <ContactInfo/>
        </div>
    );
}
