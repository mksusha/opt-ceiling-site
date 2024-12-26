import React from "react";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../components/ui/checkbox";

const ParticipantForm = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center items-center lg:mt-8 mt-10 min-h-screen">
            <div className="rounded-[45px] bg-lightGray shadow-xl p-10 pt-10 w-full max-w-[1350px] flex flex-col items-center relative">
                {/* Заголовок */}
                <h1 className="text-xl font-extrabold text-center mb-4">
                    {t("ОНЛАЙН-ЗАЯВКА ДЛЯ УЧАСТНИКОВ")}
                </h1>

                {/* Информационный текст */}
                <p className="text-lg text-gray-700 text-center mb-8">
                    {t(
                        "После отправки заявки с вами свяжется менеджер, который поможет вам с организационными вопросами участия вашей компании в выставке."
                    )}
                </p>

                {/* Форма */}
                <form className="w-full grid grid-cols-2 gap-x-8 gap-y-6">
                    {/* Название мероприятия */}
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-lg font-medium mb-2 text-gray-700">
                            {t("Название мероприятия")}
                        </label>
                        <select
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                        >
                            <option value="drive">{t("Драйв")}</option>
                            <option value="master-class">{t("Мастер-класс")}</option>
                            <option value="ceiling-day">{t("День Потолочника")}</option>
                            <option value="webinar">{t("Вебинар")}</option>
                        </select>
                    </div>

                    {/* Название компании */}
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-lg font-medium mb-2 text-gray-700">
                            {t("Название компании")}
                        </label>
                        <input
                            type="text"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите название компании")}
                        />
                    </div>

                    {/* Сайт */}
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-lg font-medium mb-2 text-gray-700">
                            {t("Сайт")}
                        </label>
                        <input
                            type="text"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите сайт компании")}
                        />
                    </div>

                    {/* Контактное лицо */}
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-lg font-medium mb-2 text-gray-700">
                            {t("Контактное лицо (ФИО)")}
                        </label>
                        <input
                            type="text"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите ФИО")}
                        />
                    </div>

                    {/* Должность */}
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-lg font-medium mb-2 text-gray-700">
                            {t("Должность")}
                        </label>
                        <input
                            type="text"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите должность")}
                        />
                    </div>

                    {/* Телефон */}
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-lg font-medium mb-2 text-gray-700">
                            {t("Телефон")}
                        </label>
                        <input
                            type="tel"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите телефон")}
                        />
                    </div>

                    {/* E-mail и согласие на обработку данных */}
                    <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 items-end gap-x-4">
                        <div>
                            <label className="block text-lg font-medium mb-2 text-gray-700">
                                {t("E-mail")}
                            </label>
                            <input
                                type="email"
                                className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                                placeholder={t("Введите E-mail")}
                            />
                        </div>
                        <div className="mt-5 lg:mb-2 lg:ml-2.5">
                            <Checkbox id="custom-checkbox" className="border-orange data-[state=checked]:bg-orange" />
                            <label htmlFor="custom-checkbox" className="lg:text-lg text-sm text-gray-700 cursor-pointer">
                                {t("Даю согласие на обработку своих персональных данных")}
                            </label>
                        </div>
                    </div>

                    {/* Кнопка отправки */}
                    <div className="col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="bg-orange text-white border-2 border-transparent hover:bg-transparent hover:border-orange hover:text-orange px-4 py-3 w-full lg:w-1/4 rounded-[14px] text-sm lg:text-base transition-all lg:mt-3 duration-300 ease-in-out"
                        >
                            {t("Отправить заявку")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ParticipantForm;
