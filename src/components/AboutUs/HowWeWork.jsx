import {CheckCircle} from "lucide-react";
import {Card} from "flowbite-react";
import {BsDashLg} from "react-icons/bs";
import React from "react";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion"; // Import framer-motion

export default function HowWeWork() {
    const {t} = useTranslation();

    return (
        <section
            className="mt-10 p-5 py-16 bg-[url(/faq-one-bg.jpg)] bg-no-repeat bg-cover"
        >
            <div className="container mx-auto px-4">
                <motion.p
                    className="mb-4 text-white uppercase tracking-widest flex items-center gap-3"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{once: false}}
                >
                    <BsDashLg className="size-6 md:size-8"/>
                    {t("howWeWork")}
                </motion.p>

                <motion.h2
                    className="text-4xl mb-10 text-white"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1, delay: 0.2}}
                    viewport={{once: false}}
                >
                    {t("weCare")}
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        t("step1"),
                        t("step2"),
                        t("step3"),
                        t("step4"),
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: index * 0.2}}
                            viewport={{once: false}}
                        >
                            <Card
                                className="flex items-center p-5 shadow-md rounded-lg !bg-white border border-gray-200 h-full">
                                <CheckCircle className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0"/>
                                <p className="text-gray-700 text-md font-medium">{text}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="mt-8 text-white text-lg font-medium text-center"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1, delay: 1}}
                    viewport={{once: false}}
                >
                    {t("weCareDesc_1")} <br/>
                    <span className="text-green-400 font-bold text-2xl py-8 block">
                        {t("weCareDesc_2")} ♻️
                    </span>
                </motion.p>
            </div>
        </section>
    );
}
