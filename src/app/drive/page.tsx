"use client";

import React from "react";
import "../styles/gradientify.css";

const HomePage = () => {
    return (
        <div className="h-screen relative bg-drive">
            <div className="absolute top-0 -left-40 w-[500px] h-[500px] rounded-full blur-xl opacity-50 pointer-events-none" style={{
                background: "linear-gradient(0deg, #f60 0%, rgba(250, 151, 30, 0.86) 20%, #f24646 39%, rgba(245, 115, 115, 0.88) 52%, #eb6aba 71%, rgba(187, 154, 227, 0.87) 100%, rgba(217, 217, 217, 0.82) 100%)"
            }}></div>
            <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full blur-xl opacity-50 pointer-events-none" style={{
                background: "linear-gradient(0deg, #f60 0%, rgba(250, 151, 30, 0.86) 20%, #f24646 39%, rgba(245, 115, 115, 0.88) 52%, #eb6aba 71%, rgba(187, 154, 227, 0.87) 100%, rgba(217, 217, 217, 0.82) 100%)"
            }}></div>
            <header className="fixed top-0 left-0 w-full bg-opacity-20 bg-white backdrop-blur-lg flex items-center justify-between px-8 py-4 z-50">
                <div className="flex items-center">
                    <img src="/logo3.svg" alt="Logo OPT1" className="h-14 mr-4" />
                    <img src="/logo-opt2.png" alt="Logo2" className="h-14" />
                </div>
                <div>
                    <p className="text-lg text-white font-bold">+7 (999) 123-45-67</p>
                </div>
            </header>
            <main className="flex flex-col items-center justify-center h-full ">
                <div className="text-center text-white relative z-10">
                    <h1 className="text-xl font-bold">1 марта Чебоксары</h1>
                    <ul className="mt-4 space-y-2">
                        <li className="font-bold text-[120px] leading-[110%] uppercase text-center">Волжский</li>
                        <li className="font-bold text-[140px] leading-[110%] uppercase text-center">ДРАЙВ</li>
                        <div className="absolute w-full flex justify-center">
                            <button
                                className="gradient-button "
                                onClick={() =>
                                    window.open("https://optceiling.timepad.ru/event/3173857/", "_blank")
                                }
                            >
                                Зарегистрироваться
                            </button>
                        </div>


                    </ul>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
