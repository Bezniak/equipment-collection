import React from 'react';
import {Card} from 'flowbite-react';
import {BsDashLg} from "react-icons/bs";
import {useTranslation} from "react-i18next";


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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white">
                    {articles.map((article, index) => (
                        <Card key={index} className='!bg-white !border-blue-600'>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-blue-600 mb-3">{article.title}</h3>
                                <p className="text-black text-justify flex-grow">{article.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecyclingProcess;
