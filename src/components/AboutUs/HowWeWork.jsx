import {CheckCircle} from "lucide-react";
import {Card} from "flowbite-react";
import {BsDashLg} from "react-icons/bs";
import React from "react";
import {useTranslation} from "react-i18next";

export default function HowWeWork() {
    const {t} = useTranslation();

    return (
        <section
            className="container mt-10 flex justify-center items-center p-5 py-16 bg-gray-50 bg-[url(/faq-one-bg.jpg)] md:h-screen bg-center bg-no-repeat bg-cover">
            <div className="container mx-auto px-4">
                <p className="mb-4 text-white uppercase tracking-widest flex items-center gap-3">
                    <BsDashLg className="size-6 md:size-8"/>
                    {t("howWeWork")}
                </p>
                <h2 className="text-4xl mb-10 text-white">
                    {t("weCare")}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        t("step1"),
                        t("step2"),
                        t("step3"),
                        t("step4"),
                    ].map((text, index) => (
                        <Card key={index}
                              className="flex items-center p-5 shadow-md rounded-lg bg-white border border-gray-200 h-full">
                            <CheckCircle className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0"/>
                            <p className="text-gray-700 text-md font-medium">{text}</p>
                        </Card>
                    ))}
                </div>

                <p className="mt-8 text-white text-lg font-medium text-center">
                    {t("weCareDesc_1")} <br/>
                    <span className="text-green-400 font-bold text-2xl py-8 block">
                        {t("weCareDesc_2")} ♻️
                    </span>
                </p>
            </div>
        </section>
    );
}
