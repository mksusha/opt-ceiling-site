import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#3f3f3f] text-white py-8 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between  items-center space-y-4 sm:space-y-0">
                {/* Логотипы */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/logo3.svg"
                        alt="Logo OPT1"
                        className="h-10 sm:h-14"
                    />
                    <img
                        src="/logo-opt2.png"
                        alt="Logo OPT2"
                        className="h-10 sm:h-14 !ml-10 "
                    />
                </div>

                {/* Текст копирайта */}
                <p className="text-sm sm:text-base text-gray-300">
                    © {new Date().getFullYear()} OPTCeiling. Все права защищены.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
