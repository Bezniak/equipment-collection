import { CheckCircle } from "lucide-react";
import { Card } from "flowbite-react";
import { BsDashLg } from "react-icons/bs";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HowWeWork() {
    const { t } = useTranslation();

    const steps = [
        t("step1"),
        t("step2"),
        t("step3"),
        t("step4"),
    ];

    return (
        <section
            aria-labelledby="how-we-work-heading"
            className="mt-10 p-5 py-16 bg-[url(/faq-one-bg.jpg)] bg-no-repeat bg-cover"
        >
            <div className="container mx-auto px-4">
                <header className="mb-10">
                    <motion.p
                        className="mb-4 text-white uppercase tracking-widest flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <BsDashLg className="size-6 md:size-8" aria-hidden="true" />
                        <span id="how-we-work-heading">{t("howWeWork")}</span>
                    </motion.p>

                    <motion.h2
                        className="text-4xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        {t("weCare")}
                    </motion.h2>
                </header>

                <ul className="grid md:grid-cols-2 gap-6" role="list">
                    {steps.map((step, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: false }}
                            role="listitem"
                        >
                            <article>
                                <Card className="flex items-center p-5 shadow-md rounded-lg !bg-white border border-gray-200 h-full">
                                    <CheckCircle
                                        className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0"
                                        aria-hidden="true"
                                    />
                                    <h3 className="text-gray-700 text-md font-medium">
                                        {step}
                                    </h3>
                                </Card>
                            </article>
                        </motion.li>
                    ))}
                </ul>

                <motion.div
                    className="mt-8 text-white text-lg font-medium text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: false }}
                >
                    <p>{t("weCareDesc_1")}</p>
                    <p className="text-green-400 font-bold text-2xl py-8 block">
                        {t("weCareDesc_2")} ♻️
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
