import { PhoneCall } from "lucide-react";
import { FaTruck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {Button} from "flowbite-react";
import React, {useState} from "react";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";

export default function ContactInfo() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
       <div>
           <div className="bg-black opacity-90 py-16 text-white p-6 flex flex-col md:flex-row justify-evenly items-center text-center md:text-left">
               <div className='flex flex-col'>
                   <div className="flex flex-col md:flex-row items-center gap-4 mb-6 md:mb-0">
                       <FaTruck className="w-10 h-10 mr-4 text-yellow-400" />
                       <div>
                           <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-5">{t("wantFree")}</h2>
                           <p className="text-lg md:text-xl">{t("wantFreeDesc")}</p>
                       </div>
                   </div>
                   <Button
                       onClick={() => setIsModalOpen(true)}
                       className='bg-orange-500 text-lg py-6 px-6 my-12 mx-auto md:mx-0 md:text-left hover:bg-orange-600 w-fit'
                   >
                       {t("book")}
                   </Button>
               </div>
               <div className="flex flex-col items-center md:items-start gap-4">
                   <a href="tel:+375297766450" className="text-xl md:text-2xl font-bold flex items-center gap-2 border border-yellow-400 p-4 rounded-lg">
                       <PhoneCall className="w-6 md:w-8 h-6 md:h-8 text-yellow-400" /> +375 29 77 66 450
                   </a>
                   <div className="text-center md:text-left mt-4">
                       <p className="text-lg md:text-2xl font-bold mb-2 text-yellow-400">{t("workingHour_1")}</p>
                       <p className="text-lg md:text-2xl font-bold text-red-500">{t("workingHours_2")}</p>
                   </div>
               </div>
           </div>
           {isModalOpen && <ModalWindow isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
       </div>
    );
}