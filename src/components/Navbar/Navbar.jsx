import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "flowbite-react";
import {ROUTES} from "../../config/routes.js";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../context/AuthContext";
import ruFlag from "../../assets/ru.svg";
import enFlag from "../../assets/en.svg";
import {NavLink} from "react-router-dom";

const NavbarComponent = () => {
    const {t} = useTranslation();
    const {locale, changeLocale} = useAuth();

    // Добавляем состояние для меню
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        changeLocale(locale === "ru" ? "en" : "ru");
    };

    // Функция для управления открытием/закрытием меню
    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Функция для скрытия меню при клике на ссылку
    const handleCloseMenu = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(false);
        }
    };

    return (
        <Navbar fluid className="absolute z-50 top-0 w-full bg-white opacity-80 py-3 text-white">
            <NavbarBrand>
                <img src="/logo.svg" className="w-16 md:w-22" alt="логотип ЭкоСборТех"/>
            </NavbarBrand>

            <div className="flex md:order-2 items-center space-x-4">
                <button onClick={toggleLanguage} className="p-1 rounded">
                    <img src={locale === "ru" ? ruFlag : enFlag} alt="Language flag" className="size-10"/>
                </button>
                <NavbarToggle onClick={handleToggleMenu}/>
            </div>

            <NavbarCollapse className={`p-5 ${isOpen ? "block" : "hidden"}`}>
                <NavLink
                    to={ROUTES.HOME}
                    onClick={handleCloseMenu}
                    className={({isActive}) =>
                        `text-base mb-3 md:mb-0 hover:text-orange-500 transition ${isActive ? "text-orange-500 font-semibold" : "text-black"}`
                    }
                >
                    {t("home")}
                </NavLink>
                <NavLink
                    to={ROUTES.ABOUT_US}
                    onClick={handleCloseMenu}
                    className={({isActive}) =>
                        `text-base mb-3 md:mb-0 hover:text-orange-500 transition ${isActive ? "text-orange-500 font-semibold" : "text-black"}`
                    }
                >
                    {t("about")}
                </NavLink>
                <NavLink
                    to={ROUTES.SERVICES}
                    onClick={handleCloseMenu}
                    className={({isActive}) =>
                        `text-base mb-3 md:mb-0 hover:text-orange-500 transition ${isActive ? "text-orange-500 font-semibold" : "text-black"}`
                    }
                >
                    {t("services")}
                </NavLink>
                <NavLink
                    to={ROUTES.CONTACT}
                    onClick={handleCloseMenu}
                    className={({isActive}) =>
                        `text-base mb-3 md:mb-0 hover:text-orange-500 transition ${isActive ? "text-orange-500 font-semibold" : "text-black"}`
                    }
                >
                    {t("contact")}
                </NavLink>
            </NavbarCollapse>
        </Navbar>
    );
};

export default NavbarComponent;
