import React from "react";
import { FaBox, FaTags, FaMapMarkedAlt } from 'react-icons/fa';

const NevskyDriveBlock = () => {
    return (
        <div className="bg-white max-w-[1350px] mx-auto py-16 px-6 md:py-24 md:px-16 rounded-3xl relative overflow-hidden border border-gray-200 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 md:mb-12 uppercase text-center">
                НЕВСКИЙ ДРАЙВ ПО-НОВОМУ
            </h2>
            <p className="text-lg md:text-xl text-black mb-10 md:mb-14 text-center max-w-3xl">
                В этом году мероприятие изменится. Оно по-прежнему будет идти один день, но теперь будет кардинально отличаться от прошлого года.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-[1350px]">
                <div className="bg-orange/70 p-6 md:p-8 rounded-2xl shadow flex flex-col items-center text-center">
                    <FaTags className="text-white text-5xl md:text-6xl mb-4 md:mb-6" />
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">Новые бренды</h3>
                    <p className="text-white text-base md:text-lg">Откройте для себя свежие и инновационные компании.</p>
                </div>
                <div className="bg-orange/70 p-6 md:p-8 rounded-2xl shadow flex flex-col items-center text-center">
                    <FaBox className="text-white text-5xl md:text-6xl mb-4 md:mb-6" />
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">Новые продукты</h3>
                    <p className="text-white text-base md:text-lg">Испытайте новейшие разработки и технологии на выставке.</p>
                </div>
                <div className="bg-orange/70 p-6 md:p-8 rounded-2xl shadow flex flex-col items-center text-center">
                    <FaMapMarkedAlt className="text-white text-5xl md:text-6xl mb-4 md:mb-6" />
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">Новый формат</h3>
                    <p className="text-white text-base md:text-lg">Уникальная программа, обновленный формат и новая локация.</p>
                </div>
            </div>
        </div>
    );
};

export default NevskyDriveBlock;