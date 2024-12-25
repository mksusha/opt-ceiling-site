import { t } from "i18next"; // Локализация
import { FaTelegramPlane, FaVk } from "react-icons/fa"; // Иконки для Telegram и VK

export default function Footer() {
    return (
        <footer className=" max-w-[1350px] m-auto bg-midGray text-white rounded-t-[45px]">
            <div className=" mt-10 mx-auto px-6 py-6 lg:px-[60px] lg:py-[30px]">
                {/* Верхний блок: логотип, навигация и соцсети */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-center lg:text-left mb-6">
                    {/* Логотип */}
                    <div className="mb-4 lg:mb-0">
                        <img src="/logo1.svg" alt="Logo" className="h-12 mx-auto lg:mx-0" />
                    </div>

                    {/* Навигация */}
                    <nav className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out text-sm lg:text-base"
                        >
                            {t("Календарь мероприятий")}
                        </a>

                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out text-sm lg:text-base"
                        >
                            {t("Партнёрам")}
                        </a>
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out text-sm lg:text-base"
                        >
                            {t("Посетителям")}
                        </a>
                        <a
                            href="#"
                            className="hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out text-sm lg:text-base"
                        >
                            {t("Организаторам")}
                        </a>

                    </nav>

                    {/* Соцсети */}
                    <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
                        <a
                            href="https://t.me/+T61CqRO6JVo2Njcx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out text-2xl"
                        >
                            <FaTelegramPlane />
                        </a>

                        <a
                            href="https://vk.com/publicceiling"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 hover:bg-lightGray hover:bg-opacity-10 px-2 py-1 rounded-xl transition-all duration-300 ease-in-out text-2xl"
                        >
                            <FaVk />
                        </a>
                    </div>

                </div>

                {/* Центральный блок с контактами и формой */}
                <div
                    className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 space-y-6 lg:space-y-0">
                    {/* Контакты */}
                    <div className="text-center lg:text-left">
                        <h4 className="mb-2 bg-orange p-2 inline-block rounded-xl text-sm lg:text-base">
                            {t("Контакты")}:
                        </h4>
                        <p className="text-sm lg:text-base">
                            {t("Почта")}:{" "}
                            <a
                                href={`mailto:${t("info@optceiling.ru")}`}
                                className="hover:underline"
                            >
                                {t("info@optceiling.ru")}
                            </a>
                        </p>
                        <p className="text-sm lg:text-base">{t("Телефон")}: +7 980-715-52-32</p>
                        <p className="text-sm lg:text-base">
                            {t("Адрес")}: {t("г. Москва, Востряковский проезд, д. 10Б, стр. 16")}
                        </p>
                    </div>


                    {/* Форма подписки */}
                    <div
                        className="bg-lightGray rounded-[14px] p-4 w-full max-w-[500px] lg:max-w-[630px]"
                        style={{
                            backgroundColor: "#ECECEC",
                        }}
                    >
                        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 items-center">
                            {/* Поле Email */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-black rounded-[14px] px-4 py-3 w-full lg:w-1/2 text-black text-sm lg:text-base"
                            />
                            {/* Кнопка Подписаться */}
                            <button
                                className="bg-orange text-black border-2 border-transparent hover:bg-transparent hover:border-orange hover:text-orange px-4 py-3 w-full lg:w-1/2 rounded-[14px] text-sm lg:text-base transition-all duration-300 ease-in-out"
                            >
                                {t("Подписаться на новости")}
                            </button>

                        </div>
                    </div>

                </div>

                {/* Полоска */}
                <hr className="border-gray-700 mb-6"/>

                {/* Нижний блок с копирайтом */}
                <div className="text-center text-sm">
                    <p>
                    &copy; 2025 {t("«ОптСилингИвент» Организация мероприятия в сфере натяжных потолков, дизайна интерьера и строительства")}
                    </p>


                </div>

            </div>
        </footer>
    );
}
