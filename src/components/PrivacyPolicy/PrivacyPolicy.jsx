import React from 'react';
import {useTranslation} from "react-i18next";

const PrivacyPolicy = () => {
    const {t} = useTranslation();

    return (
        <div className='bg-white'>
            <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 text-center">
                <div className="h-96 max-w-4xl mx-auto flex items-center justify-center">
                    <h1 className="text-4xl">
                        {t("privacyPolicy")}
                    </h1>
                </div>
            </div>
            <div className='container mx-auto p-5 space-y-8 py-10'>
                <h2 className='text-2xl font-semibold text-gray-800 uppercase'>{t("pp.general_provisions")}</h2>
                <p className="text-lg text-gray-700">{t("pp.this_privacy_policy")}</p>
                <h2 className='text-2xl font-semibold text-gray-800 uppercase'>{t("pp.collection_use_data")}</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>{t("pp.company_may_collect")}</li>
                    <li>{t("pp.provided_voluntarily")}</li>
                    <li>{t("pp.technical_data")}</li>
                    <li>{t("pp.cookie")}</li>
                </ul>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>{t("pp.data_collected")}</li>
                    <li>{t("pp.provision_of_services")}</li>
                    <li>{t("pp.improving_the_quality")}</li>
                    <li>{t("pp.marketing_activities")}</li>
                </ul>
                <h2 className='text-2xl font-semibold text-gray-800 uppercase'>{t("pp.data_storage")}</h2>
                <p className="text-lg text-gray-700">{t("pp.stores_personal")}</p>
                <h2 className='text-2xl font-semibold text-gray-800 uppercase'>{t("pp.disclosure_data")}</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>{t("pp.does_not_transfer_data")}</li>
                    <li>{t("pp.user_consent")}</li>
                    <li>{t("pp.comply_legal_requirements")}</li>
                    <li>{t("pp.engaging_service_providers")}</li>
                </ul>
                <p className="text-lg text-gray-700">{t("pp.data_transfer_countries")}</p>
                <h2 className='text-2xl font-semibold text-gray-800 uppercase'>{t("pp.user_rights")}</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>{t("pp.depending_on_laws")}</li>
                    <li>{t("pp.request_access")}</li>
                    <li>{t("pp.request_correction")}</li>
                    <li>{t("pp.restrict_data")}</li>
                    <li>{t("pp.withdraw_consent")}</li>
                </ul>
                <p className="text-lg text-gray-700">{t("pp.exercise_rights")}</p>
                <h2 className='text-2xl font-semibold text-gray-800 uppercase'>{t("pp.data_protection")}</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>{t("pp.company_takes_measures")}</li>
                    <li>{t("pp.using_encryption")}</li>
                    <li>{t("pp.restricting_access")}</li>
                    <li>{t("pp.regular_updates")}</li>
                </ul>
                <h2 className='text-2xl font-semibold text-gray-800 uppercase'>{t("pp.changes_policy")}</h2>
                <p className="text-lg text-gray-700">{t("pp.company_reserves_right")}</p>
                <h2 className='text-2xl font-semibold text-gray-800 uppercase'>{t("pp.international_aspects")}</h2>
                <p className="text-lg text-gray-700">{t("pp.company_operates")}</p>
                <h2 className='text-2xl font-semibold text-gray-800 uppercase'>{t("pp.conclusion")}</h2>
                <p className="text-lg text-gray-700">{t("pp.have_any_questions")}</p>
            </div>

        </div>
    );
};

export default PrivacyPolicy;