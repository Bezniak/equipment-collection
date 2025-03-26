import React from 'react';
import {Card} from 'flowbite-react';
import {BsDashLg} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const RecyclingProcess = () => {
    const {t} = useTranslation();

    const articles = [
        {
            title: t("recyclingTitle_1"),
            description: t("recyclingDesc_1"),
            image: '/recycling_1.jpg'
        },
        {
            title: t("recyclingTitle_2"),
            description: t("recyclingDesc_2"),
            image: '/recycling_2.jpg'
        },
        {
            title: t("recyclingTitle_3"),
            description: t("recyclingDesc_3"),
            image: '/recycling_3.jpg'
        },
        {
            title: t("recyclingTitle_4"),
            description: t("recyclingDesc_4"),
            image: '/recycling_4.jpg'
        }
    ];

    return (
        <div className="py-10 px-5 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <p className="mb-4 text-blue-600 uppercase tracking-widest flex items-center gap-3">
                    <BsDashLg className="size-6 md:size-8"/>
                    {t("recyclingProcess")}
                </p>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    {t("recyclingTitle")}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    После того как мы заберем вашу технику, она проходит несколько этапов переработки:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{opacity: 0, y: 50, rotateY: -90}}
                            whileInView={{opacity: 1, y: 0, rotateY: 0}}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            viewport={{once: false, amount: 0.3}}
                        >
                            <Card
                                className="!bg-white !border-blue-600 shadow-xl overflow-hidden flex flex-col h-[380px]">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="flex flex-col flex-grow p-4">
                                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{article.title}</h3>
                                    <p className="text-black text-justify flex-grow line-clamp-3">{article.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecyclingProcess;
