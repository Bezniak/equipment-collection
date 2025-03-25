import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Button, TextInput, Textarea} from "flowbite-react";
import {useTranslation} from "react-i18next";
import {BsDashLg} from "react-icons/bs";

const TELEGRAM_BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID";

export default function FAQContactForm() {
    const {t} = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        const message = `New Inquiry:\nName: ${data.name}\nPhone: ${data.phone}\nSubject: ${data.subject}\nMessage: ${data.message}`;

        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({chat_id: TELEGRAM_CHAT_ID, text: message})
        });
    };

    const faqData = [
        {question: "How can I schedule a repair?", answer: "You can contact us via the form or call our support line."},
        {question: "What appliances do you repair?", answer: "We repair refrigerators, ovens, dishwashers, and more."},
        {
            question: "How long does a typical repair take?",
            answer: "Repairs usually take between 1-3 hours depending on the issue."
        },
        {question: "Do you offer warranty on repairs?", answer: "Yes, we provide a 6-month warranty on all repairs."}
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
                <h2 className="text-2xl font-bold mb-5 text-center text-black">
                    {t("send")}
                </h2>
                <p className='text-lg mb-10'>
                    {t("sendDesc")}
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <TextInput
                        {...register("name", {required: "Name is required"})}
                        placeholder="Your Name"
                        color={errors.name ? "failure" : "gray"}
                        className='outline-none focus:outline-none'
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

                    <TextInput
                        {...register("phone", {
                            required: "Phone is required",
                            pattern: {value: /^\+?\d{10,15}$/, message: "Invalid phone number"}
                        })}
                        placeholder="Phone Number"
                        color={errors.phone ? "failure" : "gray"}
                    />
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}

                    <TextInput
                        {...register("subject", {required: "Subject is required"})}
                        placeholder="Subject"
                        color={errors.subject ? "failure" : "gray"}
                    />
                    {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}

                    <Textarea
                        {...register("message", {required: "Message is required"})}
                        placeholder="Your Message"
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}

                    <Button type="submit" color="dark">Send Request</Button>
                </form>
            </div>
        </div>
    );
}
