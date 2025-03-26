import React from 'react';
import {useTranslation} from "react-i18next";
import ContactInfo from "../ContactInfo/ContactInfo.jsx";
import FAQContactForm from "../FAQContactForm/FAQContactForm.jsx";

const Contacts = () => {
    const {t} = useTranslation();


    return (
        <div>
            <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 text-center">
                <div className="h-96 max-w-4xl mx-auto flex items-center justify-center">
                    <h1 className="text-4xl">
                        {t("contact")}
                    </h1>
                </div>
            </div>
            <FAQContactForm/>
            <ContactInfo/>

        </div>
    );
};

export default Contacts;