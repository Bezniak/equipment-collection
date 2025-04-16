import React, {useState} from 'react';
import {Button} from 'flowbite-react';
import {BsDashLg} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const Process = () => {
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const steps = [
        {
            id: '01',
            title: t("processTitle_1"),
            description: t("processDesc_1"),
            icon: '📞'
        },
        {
            id: '02',
            title: t("processTitle_2"),
            description: t("processDesc_2"),
            icon: '🚛'
        },
        {
            id: '03',
            title: t("processTitle_3"),
            description: t("processDesc_3"),
            icon: '💰'
        },
        {
            id: '04',
            title: t("processTitle_4"),
            description: t("processDesc_4"),
            icon: '📜'
        }
    ];

    return (
        <section className="bg-gray-100 py-12 px-6" aria-labelledby="process-title">
            <div className="max-w-6xl mx-auto text-center">
                <p className="mb-4 text-blue-600 uppercase tracking-widest flex items-center gap-3">
                    <BsDashLg className="size-6 md:size-8"/>
                    {t("ourProcess")}
                </p>
                <h2 id="process-title" className="text-blue-600 font-semibold text-2xl mb-5">
                    {t("processTitle")}
                </h2>
                <p className="text-4xl font-bold text-gray-900 mt-2">
                    {t("processDesc")}
                </p>
                <p className="text-gray-800 mt-6">
                    {t("processDescMore")}
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {steps.map((step) => {
                    const {ref, inView} = useInView({
                        triggerOnce: false, // Ensures animation happens every time it enters the view
                        threshold: 0.3, // Animation triggers when 30% of the element is visible
                    });

                    return (
                        <motion.article
                            key={step.id}
                            ref={ref}
                            initial={{opacity: 0, y: 90}} // Initial state: invisible and off-screen
                            animate={{
                                opacity: inView ? 1 : 0,
                                y: inView ? 0 : 90
                            }} // Animate to opacity 1 and bring into place
                            transition={{duration: 1, ease: "easeOut"}} // Duration and easing
                            className="bg-white shadow-lg rounded-lg p-6 text-center relative"
                            aria-labelledby={`step-${step.id}-title`}
                            role="region"
                        >
                            <span
                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white px-3 py-1 rounded-full font-bold">
                                {step.id}
                            </span>
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 id={`step-${step.id}-title`}
                                className="text-lg font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 mt-2">{step.description}</p>
                        </motion.article>
                    );
                })}
            </div>

            <div className="mt-20 mb-5 text-center flex items-center justify-center">
                <Button color="blue" pill size="xl" className='rounded-lg transition'
                        onClick={() => setIsModalOpen(true)} aria-label={t("book")}>
                    {t("book")}
                </Button>
            </div>
            {isModalOpen && <ModalWindow isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
        </section>
    );
};

export default Process;
