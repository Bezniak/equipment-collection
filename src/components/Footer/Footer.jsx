import React from 'react';
import { Footer, FooterCopyright, FooterDivider, FooterLinkGroup, FooterTitle } from 'flowbite-react';
import {FaTelegramPlane, FaViber} from 'react-icons/fa'; // Import Viber icon
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../config/routes.js';
import { handleClick } from '../../common/helpers.js';

"use client";

const FooterComponents = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <Footer container className="!bg-white">
            <div className="w-full container mx-auto">
                {/* Footer content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Logo Section */}
                    <div className="flex justify-center sm:justify-start">
                        <img
                            src="/logo.svg"
                            alt="ЭкоСборТех - логотип"
                            className="w-24 h-auto"
                        />
                    </div>

                    {/* Navigation Section */}
                    <div className="">
                        <FooterTitle title={t("company")} className="!text-black" />
                        <FooterLinkGroup col className="flex justify-center sm:justify-start gap-4 md:gap-2">
                            <NavLink
                                to={ROUTES.ABOUT_US}
                                onClick={handleClick}
                                className="hover:text-orange-500 transition !text-black"
                            >
                                {t("about")}
                            </NavLink>
                            <NavLink
                                to={ROUTES.SERVICES}
                                onClick={handleClick}
                                className="hover:text-orange-500 transition !text-black"
                            >
                                {t("services")}
                            </NavLink>
                            <NavLink
                                to={ROUTES.CONTACT}
                                onClick={handleClick}
                                className="hover:text-orange-500 transition !text-black"
                            >
                                {t("contact")}
                            </NavLink>
                            <NavLink
                                to={ROUTES.PP}
                                onClick={handleClick}
                                className="hover:text-orange-500 transition !text-black"
                            >
                                {t("privacyPolicy")}
                            </NavLink>
                        </FooterLinkGroup>
                    </div>
                </div>

                {/* Divider */}
                <FooterDivider />

                {/* Bottom Section */}
                <div className="py-10 w-full flex flex-col md:flex-row items-center justify-between">
                    {/* Copyright and Legal */}
                    <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                        <FooterCopyright
                            href="/"
                            by={t("companyName")}
                            year={year}
                            className="hover:text-orange-500 transition !text-black"
                        />
                        <p className="text-sm">
                            {t("lawAddress")}
                        </p>
                        <a
                            href="https://contragent.by/unp/200002340"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 transition text-sm "
                        >
                            {t("UNP")}
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-end">
                        <a
                            href="viber://chat?number=%2B375297621847"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 transition"
                        >
                            <FaViber size={28} />
                        </a>
                        <a
                            href="https://t.me/ecosbortech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 transition"
                        >
                            <FaTelegramPlane size={28} />
                        </a>

                    </div>
                </div>

                {/* Developer Information */}
                <div className="mx-auto text-center pt-8 font-normal">
                    <p className="text-black text-sm">
                        {t("developed_by")}&nbsp;
                        <a
                            href="https://t.me/ivan_bezniak"
                            rel="noreferrer"
                            target="_blank"
                            className="hover:text-orange-500 transition"
                        >
                            {t("ivan_bezniak")}
                        </a>
                    </p>
                    <p className="text-black text-sm">
                        <a
                            href="tel:+375295210417"
                            className="text-дп md:text-sm mt-2 block hover:text-orange-500 transition"
                        >
                            +375 29 521 04 17
                        </a>
                    </p>
                </div>
            </div>
        </Footer>
    );
};

export default FooterComponents;
