import React from 'react';
import {Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "flowbite-react";
import {ROUTES} from "../../config/routes.js";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../context/AuthContext";
import ruFlag from "../../assets/ru.svg";
import enFlag from "../../assets/en.svg";
import {NavLink} from "react-router-dom";
import {IoIosSend} from "react-icons/io";

const NavbarComponent = () => {
    const {t} = useTranslation();
    const {locale, changeLocale} = useAuth();

    const toggleLanguage = () => {
        changeLocale(locale === "ru" ? "en" : "ru");
    };

    return (
        <Navbar fluid rounded bg='transparent'
                className="absolute z-50 top-0 w-full bg-black opacity-80 py-3 text-white">
            <NavbarBrand>
                <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo"/>
                <span className="self-center whitespace-nowrap text-xl font-semibold">
                    ReTech
                </span>
            </NavbarBrand>

            <div className="flex md:order-2 items-center space-x-4">
                <button onClick={toggleLanguage} className="p-1 rounded">
                    <img src={locale === "ru" ? ruFlag : enFlag} alt="Language flag" className="size-10"/>
                </button>
                <Button
                    className='bg-transparent text-orange-500 hover:bg-orange-600 hover:text-white transition cursor-pointer'>
                    <IoIosSend className='size-8'/>
                </Button>
                <NavbarToggle/>
            </div>

            <NavbarCollapse className="p-5">
                <NavLink
                    to={ROUTES.HOME}
                    className={({isActive}) =>
                        `text-base mb-3 md:mb-0 ${isActive ? "text-orange-500 font-semibold" : "text-white"}`
                    }
                >
                    {t("home")}
                </NavLink>
                <NavLink
                    to={ROUTES.ABOUT_US}
                    className={({isActive}) =>
                        `text-base mb-3 md:mb-0 ${isActive ? "text-orange-500 font-semibold" : "text-white"}`
                    }
                >
                    {t("about")}
                </NavLink>
                <NavLink
                    to={ROUTES.SERVICES}
                    className={({isActive}) =>
                        `text-base mb-3 md:mb-0 ${isActive ? "text-orange-500 font-semibold" : "text-white"}`
                    }
                >
                    {t("services")}
                </NavLink>
                <NavLink
                    to={ROUTES.CONTACT}
                    className={({isActive}) =>
                        `text-base mb-3 md:mb-0 ${isActive ? "text-orange-500 font-semibold" : "text-white"}`
                    }
                >
                    {t("contact")}
                </NavLink>
            </NavbarCollapse>
        </Navbar>
    );
};


export default NavbarComponent;
