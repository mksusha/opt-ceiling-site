import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

const EventSection = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16 py-12 bg-gradient-to-b from-gray-50 to-gray-100 relative text-center">
            {/* Заголовок */}
            <h2
                className="font-semibold text-black text-[32px] lg:text-7xl mb-20 sm:mb-20 mt-6 sm:mt-12 uppercase"
                style={{
                    fontWeight: 600,
                    letterSpacing: "-0.05em",
                    textTransform: "uppercase",
                }}
            >
                СТАНЬ ЧАСТЬЮ СОБЫТИЯ
            </h2>

            {/* Карточка */}
            <div className="flex justify-center items-center mb-14">
                <div className="w-full max-w-[1350px] p-8 bg-midGray rounded-3xl shadow-2xl border border-gray-200 relative">
                    <div className="absolute top-[-20px] left-[50%] transform -translate-x-[50%] bg-orange p-4 rounded-full shadow-lg">
                        <Calendar size={48} className="text-white" />
                    </div>
                    <h2
                        className="font-bold text-white text-[28px] lg:text-5xl mt-16 mb-6"
                        style={{
                            letterSpacing: "0.02em",
                        }}
                    >
                        <span className="text-white">Регистрируйся</span> на{" "}
                        <span className="text-orange">мероприятие</span>
                        <br /> и <span className="text-white">приводи</span>{" "}
                        <span className="text-orange">друзей</span>
                    </h2>

                    <a
                        href="https://optceilingdrive.timepad.ru/event/3575510/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-orange text-white font-semibold text-lg sm:text-xl px-10 py-4 rounded-full shadow-lg border border-transparent hover:bg-white hover:text-orange hover:border-orange transition-all duration-300 mt-6"
                    >
                        Купить билет
                        <ArrowRight size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventSection;
