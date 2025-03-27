import React from 'react';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";

const NotFound = () => {
    const {t} = useTranslation();


    return (
        <div className='text-gray-900'>
            <div className='h-screen flex flex-col items-center justify-center'>
                <h1 className='text-4xl mb-10'>
                    Страница не найдена
                </h1>
                <NavLink to={ROUTES.HOME}
                         className='w-fit text-center border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition'
                >
                    НА ГЛАВНУЮ
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;