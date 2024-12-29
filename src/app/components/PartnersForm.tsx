import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import {RadioGroup, RadioGroupItem} from "./ui/radio-group";
import { Calendar } from "./ui/calendar";

const ParticipantForm = () => {
    const { t } = useTranslation();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Тип Date | null для поддержки null значений
    const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Состояние для управления видимостью календаря

    const handleDateSelect = (date: Date | null) => {
        if (date) {
            setSelectedDate(date);
            setIsCalendarOpen(false); // Закрыть календарь после выбора даты
        }
    };

    const handleCalendarToggle = () => {
        setIsCalendarOpen((prev) => !prev); // Переключение видимости календаря
    };

    const handleCalendarClose = () => {
        setIsCalendarOpen(false); // Закрыть календарь
    };
    return (
        <div className="flex justify-center items-center mt-24  ">
            <div className="rounded-[45px] bg-lightGray shadow-xl p-10 pt-10 w-full max-w-[1350px] flex flex-col items-center relative">
                {/* Заголовок */}
                <h1 className="text-2xl font-extrabold text-center mb-6">
                    {t("ОНЛАЙН-ЗАЯВКА")}
                </h1>

                {/* Форма */}
                <form className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                    {/* ФИО заявителя */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                            {t("ФИО заявителя")}
                        </label>
                        <input
                            type="text"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите ФИО")}
                        />
                    </div>

                    {/* Название компании */}
                    <div>
                        <label className="block text-sm  font-medium mb-2 text-gray-700">
                            {t("Название компании")}
                        </label>
                        <input
                            type="text"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите название компании")}
                        />
                    </div>

                    {/* E-mail */}
                    <div>
                        <label className="block text-sm  font-medium mb-2 text-gray-700">
                            {t("E-mail")}
                        </label>
                        <input
                            type="email"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите E-mail")}
                        />
                    </div>

                    {/* Телефон */}
                    <div>
                        <label className="block text-sm  font-medium mb-2 text-gray-700">
                            {t("Телефон")}
                        </label>
                        <input
                            type="tel"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите телефон")}
                        />
                    </div>

                    {/* Форматы мероприятия */}
                    <div className="relative">
                        <label className="block text-sm  font-medium mb-2 text-gray-700">
                            {t("Форматы мероприятия")}
                        </label>
                        <div className="relative">
                            <select
                                className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange appearance-none pr-10"
                            >
                                <option value="conference">{t("Конференция")}</option>
                                <option value="exhibition">{t("Выставка")}</option>
                                <option value="master-class">{t("Мастер-класс")}</option>
                                <option value="webinar">{t("Вебинар")}</option>
                                <option value="other">{t("Другое")}</option>
                            </select>
                            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-500"/>
        </span>
                        </div>
                    </div>


                    {/* Город */}
                    <div>
                        <label className="block text-sm  font-medium mb-2 text-gray-700">
                            {t("Город проведения")}
                        </label>
                        <input
                            type="text"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите город")}
                        />
                    </div>

                    {/* Население города */}
                    <div>
                        <label className="block text-sm  font-medium mb-2 text-gray-700">
                            {t("Население города")}
                        </label>
                        <input
                            type="number"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите численность населения")}
                        />
                    </div>

                    {/* Количество производств */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                            {t("Количество производств в городе (регионе)")}
                        </label>
                        <input
                            type="number"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите количество")}
                        />
                    </div>

                    {/* Цели и задачи мероприятия */}
                    <div>
                        <label className="block text-sm  font-medium mb-2 text-gray-700">
                            {t("Цели и задачи мероприятия")}
                        </label>
                        <textarea
                            className="border border-black rounded-[14px] px-4 py-3 w-full h-[52px] text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Опишите цели и задачи")}
                        />
                    </div>

                    {/* Желаемый состав участников */}
                    <div>
                        <label className="block text-sm  font-medium mb-2 text-gray-700">
                            {t("Желаемый состав участников-партнеров")}
                        </label>
                        <textarea
                            className="border border-black rounded-[14px] px-4 py-3 w-full h-[52px] text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Опишите состав участников")}
                        />
                    </div>

                    {/* Дата проведения мероприятия */}

                    {/* Дата проведения мероприятия */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                            {t("Дата проведения мероприятия")}
                        </label>
                        <div
                            className="relative"
                            onClick={handleCalendarToggle} // Открыть календарь при нажатии
                        >
                            <input
                                type="text"
                                className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange cursor-pointer"
                                value={
                                    selectedDate
                                        ? selectedDate.toLocaleDateString()
                                        : ""
                                }
                                placeholder={t("Выберите дату")}
                                readOnly // Поле только для чтения
                            />
                            {isCalendarOpen && (
                                <div className="absolute top-full mt-2 z-50">
                                    <Calendar
                                        className="border border-black rounded-[14px] w-full bg-white"
                                        selectedDate={selectedDate} // Выбранная дата
                                        onSelect={handleDateSelect} // Обработчик выбора даты
                                        onClose={handleCalendarClose} // Обработчик закрытия календаря
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Ориентировочное количество гостей */}
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                            {t("Ориентировочное количество гостей")}
                        </label>
                        <input
                            type="number"
                            className="border border-black rounded-[14px] px-4 py-3 w-full text-black text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder={t("Введите количество")}
                        />
                    </div>
                    {/* Статус */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                        <label className="block text-sm  font-medium mb-2 text-gray-700">
                            {t("Статус")}
                        </label>
                        <RadioGroup defaultValue="participant" className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <RadioGroupItem
                                    value="co-organizer"
                                    id="co-organizer"
                                />
                                <label htmlFor="co-organizer" className="text-sm lg:text-base">
                                    {t("Соорганизатор")}
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem
                                    value="partner"
                                    id="partner"

                                />
                                <label htmlFor="partner" className="text-sm lg:text-base">
                                    {t("Партнер")}
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem
                                    value="participant"
                                    id="participant"

                                />
                                <label htmlFor="participant" className="text-sm lg:text-base">
                                    {t("Участник")}
                                </label>
                            </div>
                        </RadioGroup>
                    </div>


                    {/* Кнопка отправки */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
                        <button
                            type="submit"
                            className="bg-orange text-white border-2 border-transparent hover:bg-transparent hover:border-orange hover:text-orange px-6 py-3 rounded-[14px] text-base lg:text-lg transition-all duration-300 ease-in-out"
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
