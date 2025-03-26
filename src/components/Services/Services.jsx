import React from 'react';
import {useTranslation} from "react-i18next";
import {BsDashLg} from "react-icons/bs";
import ContactInfo from "../ContactInfo/ContactInfo.jsx";

const Services = () => {
    const {t} = useTranslation();

    const services = [
        {
            icon: "❄️",
            title: t("fridgesAndFreezers"),
            description: t("fridgesAndFreezersDesc")
        },
        {
            icon: "🌀",
            title: t("washersAndDryers"),
            description: t("washersAndDryersDesc")
        },
        {
            icon: "🍲",
            title: t("microwavesAndVacuums"),
            description: t("microwavesAndVacuumsDesc")
        },
        {
            icon: "🍵",
            title: t("kitchenAppliances"),
            description: t("kitchenAppliancesDesc")
        },
        {
            icon: "🔥",
            title: t("heaters"),
            description: t("heatersDesc")
        },
        {
            icon: "🔌",
            title: t("electricKettles"),
            description: t("electricKettlesDesc")
        },
        {
            icon: "🖨️",
            title: t("officeEquipment"),
            description: t("officeEquipmentDesc")
        },
        {
            icon: "🎮",
            title: t("gamingConsoles"),
            description: t("gamingConsolesDesc")
        },
        {
            icon: "📸",
            title: t("cameras"),
            description: t("camerasDesc")
        },
        {
            icon: "🔊",
            title: t("audioEquipment"),
            description: t("audioEquipmentDesc")
        },
        {
            icon: "💻",
            title: t("laptopsAndComputers"),
            description: t("laptopsAndComputersDesc")
        },
        {
            icon: "📱",
            title: t("mobileDevices"),
            description: t("mobileDevicesDesc")
        },
        {
            icon: "❄️",
            title: t("airConditioners"),
            description: t("airConditionersDesc")
        },
        {
            icon: "🚿",
            title: t("waterHeaters"),
            description: t("waterHeatersDesc")
        },
        {
            icon: "🧊",
            title: t("freezerChests"),
            description: t("freezerChestsDesc")
        },
        {
            icon: "🏃‍♂️",
            title: t("fitnessEquipment"),
            description: t("fitnessEquipmentDesc")
        },
        {
            icon: "🛴",
            title: t("electricScooters"),
            description: t("electricScootersDesc")
        },
        {
            icon: "🔒",
            title: t("securitySystems"),
            description: t("securitySystemsDesc")
        },
        {
            icon: "💨",
            title: t("personalCareDevices"),
            description: t("personalCareDevicesDesc")
        },
        {
            icon: "🧊",
            title: t("iceMakers"),
            description: t("iceMakersDesc")
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 text-center">
                <div className="h-96 max-w-4xl mx-auto flex items-center justify-center">
                    <h1 className="text-4xl">{t("services")}</h1>
                </div>
            </div>

            <div
                className="container mx-auto p-5 md:py-20 md:px-10 rounded-lg flex flex-col md:flex-row items-center relative">
                <div className="md:w-2/3">
                    <p className="mb-4 text-blue-600 uppercase tracking-widest flex items-center gap-3">
                        <BsDashLg className="size-6 md:size-8"/>
                        {t("ourService")}
                    </p>
                    <h2 className="text-4xl mb-10 text-black">{t("whatWeAccept")}</h2>
                    <p className="mt-8 text-black text-lg text-left">{t("whatWeAcceptDesc")}</p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
                    <img src="/services.webp" alt=""/>
                </div>
            </div>

            <div className='bg-gray-900 py-10 mb-20'>
                <div className="container mx-auto p-5 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between items-center text-center p-4"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "auto", // Allow flexible height
                            }}
                        >
                            <span className="text-4xl md:text-5xl mb-2">{service.icon}</span>
                            <p className="text-sm mb-4 text-white text-center md:text-lg font-semibold break-words">{service.title}</p>
                            <div className="text-sm text-white flex-grow overflow-auto">{service.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            <ContactInfo/>
        </div>
    );
};

export default Services;
