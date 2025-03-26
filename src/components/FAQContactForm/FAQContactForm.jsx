import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Button, Textarea, TextInput} from "flowbite-react";
import {useTranslation} from "react-i18next";
import {BsDashLg} from "react-icons/bs";
import dayjs from "dayjs";


export default function FAQContactForm() {
    const {t} = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        const timestamp = dayjs().format("DD.MM.YYYY HH:mm");
        const message = `Форма обратной связи с сайта:\n
        Имя: ${data.name}\n
        Телефон: ${data.phone}\n
        Тема: ${data.subject}\n
        Сообщение: ${data.message}\n
        Дата и время отправки: ${timestamp}`;

        await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID, text: message})
        });

        setFormSubmitted(true);
    };

    const faqData = [
        {
            question: t("question_1"),
            answer: t("answer_1"),
        },
        {
            question: t("question_2"),
            answer: t("answer_2"),
        },
        {
            question: t("question_3"),
            answer: t("answer_3"),
        },
        {
            question: t("question_4"),
            answer: t("answer_4"),
        },
        {
            question: t("question_5"),
            answer: t("answer_5"),
        },
        {
            question: t("question_6"),
            answer: t("answer_6"),
        },
    ];


    return (
        <div
            className="grid md:grid-cols-2 gap-8 px-5 md:px-20 py-20 bg-gray-100 bg-[url(/faq-one-bg.jpg)] md:h-screen bg-center bg-no-repeat bg-cover">
            <div className='container mx-auto'>
                <p className="mb-4 text-yellow-400 uppercase tracking-widest flex items-center gap-3">
                    <BsDashLg className="size-6 md:size-8"/>
                    {t("getAnswer")}
                </p>
                <h2 className="text-3xl font-bold mb-10 text-white">
                    {t("gotQuestion")}
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-white">
                            <button
                                className="w-full text-left px-4 py-3 font-semibold text-lg flex justify-between items-center bg-white hover:bg-blue-100"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {item.question}
                                <span>{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && <p className="p-4 text-gray-700">{item.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[var(--yellow)] p-6 h-fit py-20">
                {formSubmitted ? (
                    <h2 className="text-2xl font-bold text-center text-black">{t("thankYou")}</h2>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold mb-5 text-center text-black">{t("send")}</h2>
                        <p className='text-lg mb-10'>{t("sendDesc")}</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <TextInput {...register("name", {required: t("nameRequired")})} placeholder={t("name")}
                                       color={errors.name ? "failure" : "gray"}/>
                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

                            <TextInput {...register("phone", {
                                required: t("phoneRequired"),
                                pattern: {value: /^\+?\d{10,15}$/, message: t("invalidPhone")}
                            })} placeholder={t("phone")} color={errors.phone ? "failure" : "gray"}/>
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}

                            <TextInput {...register("subject", {required: t("subjectRequired")})}
                                       placeholder={t("subject")} color={errors.subject ? "failure" : "gray"}/>
                            {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}

                            <Textarea {...register("message", {required: t("messageRequired")})}
                                      placeholder={t("message")} className='h-44'/>
                            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}

                            <Button type="submit" color="dark" className='py-6'>{t("sendRequest")}</Button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
