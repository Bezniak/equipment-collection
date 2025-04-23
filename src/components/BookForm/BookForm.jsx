import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {CiCalendar} from 'react-icons/ci';
import {FiPhone} from 'react-icons/fi';
import {MdOutlineDriveFileRenameOutline} from 'react-icons/md';
import {useTranslation} from 'react-i18next';
import dayjs from 'dayjs';
import {useAuth} from "../../context/AuthContext.jsx";
import 'dayjs/locale/ru'; // Импортируем нужную локаль
import 'dayjs/locale/en'; // Импортируем английскую локаль
import ru from 'date-fns/locale/ru';
import enGB from 'date-fns/locale/en-GB';
import {FaMapMarkerAlt} from "react-icons/fa";
import {BiSolidFridge} from "react-icons/bi";
import * as emailjs from "emailjs-com";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;


const BookForm = ({additionalStyle}) => {
    const {register, handleSubmit, watch, setValue, formState: {errors},} = useForm();
    const [selectedDate, setSelectedDate] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [dateError, setDateError] = useState(false); // New state for date error
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission status
    const {t} = useTranslation();
    const {locale} = useAuth();

    useEffect(() => {
        const locales = {ru, en: enGB};
        registerLocale(locale, locales[locale] || enGB);
    }, [locale]);

    const sendTelegramMessage = async (data) => {
        try {
            const now = new Date();
            const formattedDate = now.toLocaleDateString('ru-RU');
            const formattedTime = now.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});

            if (!selectedDate) {
                setDateError(true); // Set date error state to true
                return;
            }

            const message = encodeURIComponent(
                `📦 Новая заявка с сайта ЭкоСборТех!\n\n` +
                `🕒 Запись оформлена: ${formattedDate} в ${formattedTime}\n\n` +
                `👤 Имя: ${data.name}\n` +
                `📞 Телефон: ${data.phone}\n` +
                `📍 Адрес: ${data.address}\n` +
                `🔧 Техника: ${data.equipmentName}\n` +
                `📅 Дата вывоза: ${selectedDate.toLocaleDateString('ru-RU')}\n`
            );

            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`;

            const response = await fetch(url, {method: 'GET'});

            if (!response.ok) throw new Error('Ошибка при отправке сообщения');
        } catch (error) {
            console.error('Ошибка отправки в Telegram:', error);
            alert('Не удалось отправить запись, попробуйте снова.');
        }
    };

    const onSubmit = async (data) => {
        if (!selectedDate) {
            alert("Выберите дату вывоза");
            return;
        }

        setIsSubmitting(true); // Disable submit button

        const templateParams = {
            region: 'Гродно',
            name: data.name,
            phone: data.phone,
            address: data.address,
            techlist: data.equipmentName,
            date: selectedDate.toLocaleDateString('ru-RU'), // например: 24.04.2025
        };

        try {
            await emailjs.send(
                'service_d4qph9d',
                'template_c835pw6',
                templateParams,
                'pJNwiGyYIc4d54q8M'
            );

            await sendTelegramMessage(data);

            setBookingDetails(templateParams);
            setIsSubmitted(true); // ⬅️ важно: иначе не покажется сообщение "Спасибо"
        } catch (error) {
            console.log('FAILED...', error);
            alert("Ошибка при отправке формы");
        } finally {
            setIsSubmitting(false); // Re-enable submit button after form submission
        }
    };

    return (
        <div className='md:min-h-[75vh] xs:h-fit flex flex-col items-center justify-center gap-8 p-5'>
            {isSubmitted ? (
                <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-4'>
                        {t("thankYouMessageBooking.thanks")}
                    </h1>
                    <p className='text-lg'>{t("thankYouMessageBooking.youBookOn")} {t("thankYouMessageBooking.onDate")} {bookingDetails.date}</p>
                    <p className='text-lg mt-3'>
                        {t("thankYouMessageBooking.wait")}
                    </p>
                </div>
            ) : (
                <>
                    <h1 className={`${additionalStyle ? 'hidden' : 'block'} text-center`}>
                        {t("enjoyTitle")}
                    </h1>
                    <img src='/sunset.png' alt='sunset' className={`${additionalStyle ? 'hidden' : 'block'} size-28`}/>
                    <div className='flex justify-center items-center w-full'>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={`flex flex-col ${additionalStyle ? 'lg:flex-col' : 'lg:flex-row'} gap-10 items-center justify-center mx-auto container w-full`}
                        >

                            <div className='flex flex-col items-center w-full'>
                                <div className='w-full border-b-1 mb-4'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <input type='text'
                                               placeholder={t("name")}
                                               {...register('name', {required: true})}
                                               className='w-full p-2 outline-none focus:outline-none'
                                        />
                                        <MdOutlineDriveFileRenameOutline className='size-6 text-blue-600'/>
                                    </div>
                                </div>
                                {errors.name && <p className='text-red-500 text-sm'>{t("required")}</p>}
                            </div>
                            <div className='flex flex-col items-center w-full'>
                                <div className='w-full border-b-1 mb-4'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <input
                                            type='tel'
                                            placeholder={t("enterPhoneNumber")}
                                            {...register('phone', {
                                                required: true,
                                                pattern: {
                                                    value: /^\+?\d{1,3}(\s?|\(\d{1,4}\))?([\s.-]?\d{1,4}){2,}$/,
                                                    message: t("enterValidPhone"),
                                                }
                                            })}
                                            onInput={(e) => e.target.value = e.target.value.replace(/[^\d+()\-.\s]/g, '')}
                                            className='w-full p-2 outline-none focus:outline-none'
                                        />
                                        <FiPhone className='size-6 text-blue-600'/>
                                    </div>
                                </div>
                                {errors.phone && <p className='text-red-500 text-sm'>{t("required")}</p>}
                            </div>

                            <div className='flex flex-col items-center w-full'>
                                <div className='w-full border-b-1 mb-4'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <input
                                            type='text'
                                            placeholder={t("address")}
                                            {...register('address', {required: true})}
                                            className='w-full p-2 outline-none focus:outline-none'
                                        />
                                        <FaMapMarkerAlt className='size-6 text-blue-600'/>
                                    </div>
                                </div>
                                {errors.address && <p className='text-red-500 text-sm'>{t("required")}</p>}
                            </div>

                            <div className='flex flex-col items-center w-full'>
                                <div className='w-full border-b-1 mb-4'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <input
                                            type='text'
                                            placeholder={t("equipmentName")}
                                            {...register('equipmentName', {required: true})}
                                            className='w-full p-2 outline-none focus:outline-none'
                                        />
                                        <BiSolidFridge className='size-6 text-blue-600'/>
                                    </div>
                                </div>
                                {errors.equipmentName && <p className='text-red-500 text-sm'>{t("required")}</p>}
                            </div>

                            <div className='w-full'>
                                <div className='flex flex-col items-center border-b-1 mb-4'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            minDate={new Date()}
                                            filterDate={(date) => dayjs(date).day() !== 0} // Disable Sunday
                                            popperPlacement="bottom-start"
                                            dateFormat='dd-MM-yyyy'
                                            placeholderText={t("selectDate")}
                                            className='w-full p-2 outline-none focus:outline-none'
                                            locale={locale}
                                        />
                                        <CiCalendar className='size-6 text-blue-600'/>
                                    </div>
                                </div>
                                {dateError && <p className='text-red-500 text-sm'>{t("selectDate")}</p>}
                            </div>
                            <div className='w-full'>
                                <button
                                    type='submit'
                                    className='tracking-widest w-full py-3 px-3 bg-blue-600 text-white uppercase hover:bg-orange-500 transition rounded-lg'
                                    disabled={isSubmitting} // Disable button while submitting
                                >
                                    {t("bookButton")}
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default BookForm;
