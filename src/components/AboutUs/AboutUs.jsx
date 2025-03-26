import React from "react";
import {useTranslation} from "react-i18next";
import {BsDashLg} from "react-icons/bs";
import {FaCheckCircle} from "react-icons/fa";
import HowWeWork from "./HowWeWork.jsx";
import ContactInfo from "../ContactInfo/ContactInfo.jsx";

export default function AboutUs() {
    const {t} = useTranslation();

    return (
        <div className='bg-white'>
            <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 text-center">
                <div className="h-96 max-w-4xl mx-auto flex items-center justify-center">
                    <h1 className="text-4xl">
                        {t("about")}
                    </h1>
                </div>
            </div>
            <div
                className="container mx-auto p-5 md:py-20 md:px-10 rounded-lg flex flex-col md:flex-row items-center relative">
                <div className="md:w-2/3">
                    <p className="mb-4 text-blue-600 uppercase tracking-widest flex items-center gap-3">
                        <BsDashLg className="size-6 md:size-8"/>
                        {t("about")}
                    </p>
                    <h2 className="text-4xl">
                        {t("aboutUsTitle")}
                    </h2>
                    <p className="mt-4 text-gray-600 leading-9">
                        {t("aboutDesc_1")}
                    </p>
                    <p className="mt-4 text-gray-600 leading-9">
                        {t("aboutDesc_2")}
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start gap-3 text-gray-700">
                            <FaCheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0"/>
                            <span>
                                <strong>{t("aboutBenefitTitle_1")}</strong>
                                {t("aboutBenefitDesc_1")}
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <FaCheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0"/>
                            <span>
                                <strong>{t("aboutBenefitTitle_2")}</strong>
                                {t("aboutBenefitDesc_2")}
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <FaCheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0"/>
                            <span>
                                <strong>{t("aboutBenefitTitle_3")}</strong>
                                {t("aboutBenefitDesc_3")}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
                    <img
                        src="/aboutUs.jpg"
                        alt="Award Badge"
                        className="rounded-lg shadow-md"
                    />
                    <div
                        className="absolute bottom-0 left-0 transform translate-y-1/2 bg-blue-600 text-white px-4 py-8 md:px-8 md:py-8 rounded-lg text-center shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold">30K+</h3>
                        <p>{t("unitsEquipment")}</p>
                        <h3 className="text-2xl md:text-3xl font-bold mt-5">15K+</h3>
                        <p>{t("satisfiedClients")}</p>
                    </div>
                </div>
            </div>
            <HowWeWork/>
            <ContactInfo/>
        </div>
    );
}