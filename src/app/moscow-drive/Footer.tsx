import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-midGray text-white py-8 px-4 sm:px-8 lg:px-16">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                {/* Логотип */}
                <div className="flex items-center">
                    <img
                        src="/logo3.svg"
                        alt="Logo OPT1"
                        className="h-9 lg:h-12 sm:h-12"
                        loading="eager"
                    />
                </div>

                {/* Контакты */}
                <div className="flex flex-col sm:flex-row items-center sm:space-x-6 mt-4 sm:mt-0 gap-3">
                    {/* Телефон */}
                    <a
                        href="tel:+79255076659"
                        className="text-white text-sm sm:text-lg font-light"
                    >
                        +7 (925) 507-66-59
                    </a>

                    {/* Telegram */}
                    <a
                        href="https://t.me/joinchat/scywLX_JjD8yZGYy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white text-white text-sm sm:text-lg font-light hover:bg-white hover:text-blue-500 hover:shadow-lg transition-all duration-300"
                    >
                        <FaTelegramPlane size={18} />
                        Telegram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
