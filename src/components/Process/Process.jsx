import React from 'react';
import {Button} from 'flowbite-react';
import {BsDashLg} from "react-icons/bs";
import {useTranslation} from "react-i18next";

const steps = [
    {
        id: '01',
        title: 'Оформление заявки',
        description: 'Оставьте заявку на сайте или позвоните нам. Мы согласуем с вами удобное время для вывоза.',
        icon: '📞'
    },
    {
        id: '02',
        title: 'Вывоз техники',
        description: 'Наш курьер приедет в указанное время и заберет вашу технику бесплатно.',
        icon: '🚛'
    },
    {
        id: '03',
        title: 'Экологичная обработка',
        description: 'Мы разбираем технику на компоненты, отправляя пригодные для повторного использования детали на восстановление, а остальное – на безопасную переработку.',
        icon: '♻️'
    },
    {
        id: '04',
        title: 'Ответственный подход',
        description: 'Каждый этап утилизации проходит контроль, гарантируя, что техника не нанесет вреда окружающей среде и получит новое применение.',
        icon: '📜'
    }
];

const Process = () => {
    const {t} = useTranslation();


    return (
        <div className="bg-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <p className="mb-4 text-blue-600 uppercase tracking-widest flex items-center gap-3">
                    <BsDashLg className="size-6 md:size-8"/>
                    {t("ourProcess")}
                </p>
                <h2 className="text-blue-600 font-semibold text-2xl mb-5">
                    {t("processTitle")}
                </h2>
                <p className="text-4xl font-bold text-gray-900 mt-2">
                    {t("processDesc_1")}
                </p>
                <p className="text-gray-800 mt-6">
                    {t("processDesc_2")}
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {steps.map((step) => (
                    <div key={step.id} className="bg-white shadow-lg rounded-lg p-6 text-center relative">
                        <span
                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white px-3 py-1 rounded-full font-bold">
                            {step.id}
                        </span>
                        <div className="text-5xl mb-4">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-20 mb-5 text-center flex items-center justify-center">
                <Button color="blue" pill size="xl" className='rounded-lg transition'>Оставить заявку</Button>
            </div>
        </div>
    );
};

export default Process;
