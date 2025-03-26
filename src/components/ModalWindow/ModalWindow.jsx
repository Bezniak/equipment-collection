import React from 'react';
import {useTranslation} from "react-i18next";
import BookForm from "../BookForm/BookForm.jsx";

const ModalWindow = ({isOpen, setIsModalOpen}) => {
    const {t} = useTranslation();
    const placement = 'right'; // Set drawer placement
    const backdrop = true; // Backdrop effect

    return (
        <>
            <div
                id="drawer-form"
                className={`fixed top-0 ${placement === 'right' ? 'right-0' : 'left-0'} z-50 h-screen p-4 overflow-y-auto transition-transform bg-white w-full md:w-1/3  ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                tabIndex="-1"
                aria-labelledby="drawer-form-label"
            >
                <h3 id="drawer-label"
                    className="inline-flex items-center justify-center mb-6 font-semibold text-blue-600 uppercase">
                    <svg className="w-10 h-10 me-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                    </svg>
                    <p>{t("bookNow")}</p>
                </h3>
                <button type="button" data-drawer-hide="drawer-form" aria-controls="drawer-form"
                        onClick={() => setIsModalOpen(false)}
                        className="text-blue-600 bg-transparent hover:bg-orange-500 hover:text-white rounded-lg text-sm w-10 h-10 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <BookForm additionalStyle={true}/>
            </div>
            {/* Backdrop */}
            {backdrop && isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-60"
                    onClick={() => setIsModalOpen(false)}
                />
            )}
        </>
    )
}

export default ModalWindow;
