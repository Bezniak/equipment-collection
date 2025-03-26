import React, {useState} from "react";
import {Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "flowbite-react";
import {ROUTES} from "../../config/routes.js";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../context/AuthContext";
import byFlag from "../../assets/by.svg";
import {NavLink} from "react-router-dom";
import {PhoneCall} from "lucide-react";

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
        <Navbar fluid className="absolute z-50 top-0 w-full !bg-white md:opacity-100 py-3 text-white">
            <NavbarBrand>
                <img src="/logo.svg" className="w-16 md:w-22" alt="логотип ЭкоСборТех"/>
            </NavbarBrand>
            <a
                href="tel:+375297766450"
                className="text-sm md:text-lg font-bold flex items-center gap-2 border border-orange-500 text-orange-500 p-2 rounded-lg"
            >
                <PhoneCall className="w-4 h-4 md:w-5 md:h-5 text-orange-500"/>
                +375 29 77 66 450
            </a>

            <div className="flex md:order-2 items-center space-x-4">
                <button onClick={toggleLanguage} className="p-1 rounded flex items-center">
                    {locale === "ru" ? (
                        <img src={byFlag} alt="BY" className="size-10"/>
                    ) : (
                        <span className="text-2xl font-bold text-orange-500">EN</span>
                    )}
                </button>
                <NavbarToggle onClick={handleToggleMenu}/>
            </div>

            <NavbarCollapse className={`p-5 ${isOpen ? "block" : "hidden"}`}>
                {[
                    {path: ROUTES.HOME, label: "home"},
                    {path: ROUTES.ABOUT_US, label: "about"},
                    {path: ROUTES.SERVICES, label: "services"},
                    {path: ROUTES.CONTACT, label: "contact"},
                ].map(({path, label}) => (
                    <NavLink
                        key={path}
                        to={path}
                        onClick={handleCloseMenu}
                        className={({isActive}) =>
                            `text-base mb-3 md:mb-0 hover:text-orange-500 transition ${
                                isActive ? "text-orange-500 font-semibold" : "text-black"
                            }`
                        }
                    >
                        {t(label)}
                    </NavLink>
                ))}
            </NavbarCollapse>
        </Navbar>
    );
};

export default NavbarComponent;
