import React from "react";
import { FaTelegramPlane } from "react-icons/fa"; // Импорт иконки Telegram

const Footer = () => {
    return (
        <footer className="bg-midGray text-white py-8 px-4 sm:px-8 lg:px-16">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                {/* Логотипы */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/logo3.svg"
                        alt="Logo OPT1"
                        className="h-9 lg:h-12 sm:h-12 mr-3"
                        loading="eager"
                    />
                    <img
                        src="/logo-opt-nevsky.svg"
                        alt="Logo2"
                        className="h-9 lg:h-12 sm:h-12"
                        loading="eager"
                    />
                </div>

                {/* Блок с Telegram и номером */}
                <div className="flex items-center space-x-6 mt-4 sm:mt-0">
                    {/* Ссылка на Telegram */}
                    <a
                        href="https://t.me/+nC5GWp261JU4ZGEy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white text-sm sm:text-lg font-light"
                    >
                        <FaTelegramPlane size={20} /> Telegram
                    </a>

                    {/* Номер телефона */}
                    <a
                        href="tel:+79807155232"
                        className="text-white text-sm sm:text-lg font-light"
                    >
                        +7 (980) 715-52-32
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
