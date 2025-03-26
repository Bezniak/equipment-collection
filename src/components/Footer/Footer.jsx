import React from 'react';
import {Footer, FooterCopyright, FooterDivider, FooterLinkGroup, FooterTitle} from "flowbite-react";
import {FaTelegram, FaViber} from "react-icons/fa"; // Import Viber and Telegram icons
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {handleClick} from "../../common/helpers.js";

"use client";

const FooterComponents = () => {
    const {t} = useTranslation();
    const year = new Date().getFullYear();

    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="w-full">
                        <img
                            src="/logo.svg"
                            alt="логотип ЭкоСборТех"
                            className="w-24 h-auto"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterTitle title={t("company")}/>
                            <FooterLinkGroup col>
                                <NavLink to={ROUTES.ABOUT_US} onClick={handleClick}
                                         className='hover:text-orange-500 transition'>
                                    {t("about")}
                                </NavLink>
                                <NavLink to={ROUTES.SERVICES} onClick={handleClick}
                                         className='hover:text-orange-500 transition'>
                                    {t("services")}
                                </NavLink>
                                <NavLink to={ROUTES.CONTACT} onClick={handleClick}
                                         className='hover:text-orange-500 transition'>
                                    {t("contact")}
                                </NavLink>
                                <NavLink to={ROUTES.PP} onClick={handleClick}
                                         className='hover:text-orange-500 transition'>
                                    {t("privacyPolicy")}
                                </NavLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider/>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                        <FooterCopyright href="/" by="ЭкоСборТех™" year={year}
                                         className="hover:text-orange-500 transition"/>
                        <p className="text-sm text-gray-500">
                            Юридический адрес ОАО «Брест-ВТИ» г.Брест ул.Светлая 1, 224020
                        </p>
                        <a
                            href="https://contragent.by/unp/200002340"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 transition text-sm text-gray-500"
                        >
                            {t("UNP")}
                        </a>
                    </div>

                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        {/*<FooterIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" icon={BsFacebook} />*/}
                        {/*<FooterIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" icon={BsInstagram} />*/}
                        {/*<FooterIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" icon={BsTwitter} />*/}
                        <a
                            href="https://invite.viber.com/?g2=AQBwP5-1VY0aWzzVXK0X9A_G_6a08jLNwMQImzZYuRgZXvfziOwP4fuGuwU3C1s4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaViber size={28} className="hover:text-orange-500 transition"/>
                        </a>
                        <a
                            href="https://t.me/ivan_bezniak"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTelegram size={28} className="hover:text-orange-500 transition"/>
                        </a>
                    </div>
                </div>
                <div className='mx-auto text-center pt-5'>
                    <p className='text-black text-sm'>
                        {t("developed_by")} &nbsp;
                        <a href="https://www.linkedin.com/in/ivan-bezniak-2634a11a0/"
                           rel="noreferrer"
                           target="_blank"
                           className='hover:text-orange-500 transition'
                        > {t("ivan_bezniak")}
                        </a>
                    </p>
                </div>
            </div>
        </Footer>
    );
};

export default FooterComponents;
