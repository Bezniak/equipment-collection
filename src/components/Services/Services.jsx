import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {BsDashLg} from "react-icons/bs";
import ContactInfo from "../ContactInfo/ContactInfo.jsx";
import {Button} from "flowbite-react";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import {motion} from 'framer-motion';
import MetaTags from "../../common/MetaTags.jsx";

const Services = () => {
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            icon: "🍳",
            title: t("stoves"),
            description: t("stovesDesc")
        },
        {
            icon: "🧊",
            title: t("freezerChests"),
            description: t("freezerChestsDesc")
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
    ];

    return (
        <>
            <MetaTags page="meta.services"/>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 text-center">
                    <div className="h-96 max-w-4xl mx-auto flex items-center justify-center">
                        <h1 className="text-4xl" role="heading" aria-level="1">
                            {t("services")}
                        </h1>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="container mx-auto p-5 md:py-20 md:px-10 rounded-lg flex flex-col md:flex-row items-center relative">
                    <div className="md:w-2/3">
                        <p className="mb-4 text-blue-600 uppercase tracking-widest flex items-center gap-3">
                            <BsDashLg className="size-6 md:size-8"/>
                            {t("ourService")}
                        </p>
                        <h2 className="text-4xl mb-10 text-black" role="heading" aria-level="2">{t("whatWeAccept")}</h2>
                        <p className="mt-8 text-black text-lg text-left" role="document">{t("whatWeAcceptDesc")}</p>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className='bg-orange-500 text-lg py-6 px-6 mt-12 mb-5 hover:bg-orange-600'
                            aria-label={t("book")}
                        >
                            {t("book")}
                        </Button>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
                        <img src="/services.webp" alt={t("servicesAlt")} />
                    </div>
                </section>

                {/* Services Cards */}
                <section className='bg-gray-900 py-10 mb-20'>
                    <div className="container mx-auto p-5 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between items-center text-center p-4"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "auto", // Allow flexible height
                                }}
                                initial={{opacity: 0, y: 20}}  // Initial state: hidden and slightly below
                                whileInView={{opacity: 1, y: 0}}  // Animate to fully visible and in place
                                transition={{duration: 0.2, delay: index * 0.2}} // Stagger the animations
                                viewport={{once: false}} // Trigger animation only once when it comes into view
                            >
                                <span className="text-4xl md:text-5xl mb-2" aria-hidden="true">{service.icon}</span>
                                <p className="text-sm mb-4 text-white text-center md:text-lg font-semibold break-words">{service.title}</p>
                                <div className="text-sm text-white flex-grow overflow-auto">{service.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact Info and Modal */}
                <ContactInfo/>
                {isModalOpen && <ModalWindow isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
            </div>
        </>
    );
};

export default Services;
