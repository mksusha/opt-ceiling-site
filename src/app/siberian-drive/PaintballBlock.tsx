import React from "react";

export default function PaintballBlock() {
    return (
        <div className="bg-white px-5 py-10  lg:py-20 w-full flex justify-center">
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
                {/* Фото слева */}
                <div className="flex justify-center md:justify-start w-full md:w-auto">
                    <img
                        src="/drive/paintball.jpeg" // замени на свой путь
                        alt="Пейнтбол"
                        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#FF4606] shadow-xl transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Текст справа */}
                <div className="flex-1 text-center md:text-left text-[#2c2c2c]">
                    <h3 className="text-4xl md:text-5xl font-extrabold uppercase text-[#FF4606] mb-6 tracking-tight leading-tight">
                        Адреналин, тактика, победа
                    </h3>

                    <div className="space-y-4 text-base md:text-lg leading-relaxed">
                        <p>
                            Учащенный пульс. Чувство тревоги и страха. Выброс адреналина. Усиленная работа мозга.
                            Короткая перебежка от дерева к дереву, от укрытия к укрытию. Падение. Маскировка в траве.
                            Попытки спрятаться за укрытиями. Выслеживание снайпера. Хлопки автоматов. Череда выстрелов…
                            Всё это — <strong>пейнтбол</strong>, командная военно-спортивная игра с использованием пневматического оружия.
                        </p>

                        <p>
                            Игра пройдет во второй день, <strong>20 июля</strong>, на открытой безопасной площадке
                            в сосновом лесу. Перед игрой все участники проходят инструктаж, получают снаряжение и играют с инструктором.
                            <span className="text-[#FF4606] font-semibold"> Это будет чистый драйв и незабываемые эмоции!</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
