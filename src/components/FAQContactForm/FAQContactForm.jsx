import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Textarea, TextInput } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { BsDashLg } from "react-icons/bs";
import dayjs from "dayjs";
import { AnimatePresence, motion, useInView } from "framer-motion";

export default function FAQContactForm() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const faqRef = useRef(null);
    const formRef = useRef(null);
    const faqInView = useInView(faqRef, { once: true, margin: "0px 0px -100px 0px" });
    const formInView = useInView(formRef, { once: true, margin: "0px 0px -100px 0px" });

    const onSubmit = async (data) => {
        const timestamp = dayjs().format("DD.MM.YYYY HH:mm");
        const message = `📩 Форма обратной связи с сайта\n
👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
📝 Тема: ${data.subject}
💬 Сообщение: ${data.message}
🕒 Дата и время отправки: ${timestamp}`;


        await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID, text: message })
        });

        setFormSubmitted(true);
    };

    const faqData = [
        { question: t("question_1"), answer: t("answer_1") },
        { question: t("question_2"), answer: t("answer_2") },
        { question: t("question_3"), answer: t("answer_3") },
        { question: t("question_4"), answer: t("answer_4") },
        { question: t("question_5"), answer: t("answer_5") },
        { question: t("question_6"), answer: t("answer_6") },
    ];

    return (
        <section
            className="grid md:grid-cols-2 gap-8 px-5 md:px-20 py-20 bg-gray-100 bg-[url(/faq-one-bg.jpg)] bg-center bg-no-repeat bg-cover"
            aria-label={t("getAnswer")}
        >
            {/* FAQ */}
            <motion.section
                ref={faqRef}
                initial={{ opacity: 0, y: 50 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className='container mx-auto'
                aria-labelledby="faq-heading"
            >
                <p className="mb-4 text-yellow-400 uppercase tracking-widest flex items-center gap-3">
                    <BsDashLg className="size-6 md:size-8" />
                    {t("getAnswer")}
                </p>
                <h2 id="faq-heading" className="text-3xl font-bold mb-10 text-white">
                    {t("gotQuestion")}
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <article key={index} className="bg-white rounded-lg shadow-md" aria-expanded={openIndex === index}>
                            <button
                                className="w-full text-left px-4 py-3 font-semibold text-lg flex justify-between items-center bg-white hover:bg-blue-100 transition"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-controls={`faq-answer-${index}`}
                                aria-expanded={openIndex === index}
                            >
                                {item.question}
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {openIndex === index ? "−" : "+"}
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-4 py-2 text-gray-700 overflow-hidden"
                                        role="region"
                                        aria-live="polite"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </article>
                    ))}
                </div>
            </motion.section>

            {/* Contact Form */}
            <motion.section
                ref={formRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={formInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-[var(--yellow)] p-6 h-fit py-20 rounded-lg shadow-md"
                aria-labelledby="contact-form-heading"
            >
                <AnimatePresence mode="wait">
                    {formSubmitted ? (
                        <motion.div
                            key="thankYou"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                            role="status"
                            aria-live="polite"
                        >
                            <h2 className="text-2xl font-bold text-black">{t("thankYou")}</h2>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 id="contact-form-heading" className="text-2xl font-bold mb-5 text-center text-black">
                                {t("send")}
                            </h2>
                            <p className='text-lg mb-10'>{t("sendDesc")}</p>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" role="form">
                                <label htmlFor="name" className="sr-only">{t("name")}</label>
                                <TextInput
                                    id="name"
                                    {...register("name", { required: t("nameRequired") })}
                                    placeholder={t("name")}
                                    color={errors.name ? "failure" : "gray"}
                                />
                                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

                                <label htmlFor="phone" className="sr-only">{t("phone")}</label>
                                <TextInput
                                    id="phone"
                                    {...register("phone", {
                                        required: t("phoneRequired"),
                                        pattern: { value: /^\+?\d{10,15}$/, message: t("invalidPhone") }
                                    })}
                                    placeholder={t("phone")}
                                    color={errors.phone ? "failure" : "gray"}
                                />
                                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}

                                <label htmlFor="subject" className="sr-only">{t("subject")}</label>
                                <TextInput
                                    id="subject"
                                    {...register("subject", { required: t("subjectRequired") })}
                                    placeholder={t("subject")}
                                    color={errors.subject ? "failure" : "gray"}
                                />
                                {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}

                                <label htmlFor="message" className="sr-only">{t("message")}</label>
                                <Textarea
                                    id="message"
                                    {...register("message", { required: t("messageRequired") })}
                                    placeholder={t("message")}
                                    className="h-44"
                                />
                                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}

                                <Button type="submit" color="dark" className="py-6">
                                    {t("sendRequest")}
                                </Button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.section>
        </section>
    );
}
