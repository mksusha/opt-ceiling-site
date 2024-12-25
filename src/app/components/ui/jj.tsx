"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import { Calendar } from "./ui/calendar";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/app/components/ui/pagination";
import {CalendarDays, Search} from "lucide-react";

interface Event {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    organizer: string;
    eventType: string;
    image?: string;
}

const CalendarPage: React.FC = () => {
    const { t, i18n } = useTranslation(); // Используем i18n для получения локали
    const router = useRouter();
    const locale = i18n.language; // Получаем текущую локаль
    const [events, setEvents] = useState<Event[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const [eventType, setEventType] = useState("all");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [timeFilter, setTimeFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 3;
    const [loading, setLoading] = useState(true);
    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const query = `
                    *[_type == "exhibition"] {
                        _id,
                        title,
                        title_en,
                        description,
                        description_en,
                        startDate,
                        endDate,
                        organizer,
                        organizer_en,
                        eventType,
                        eventType_en,
                        "image": image.asset->url
                    }
                `;
                const data = await client.fetch(query);

                // Форматируем данные
                const formattedData = formatData(data, locale);

                // Устанавливаем данные в состояние
                setEvents(formattedData);
                setFilteredEvents(formattedData);
            } catch (error) {
                console.error("Ошибка при загрузке данных мероприятий:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [locale, t]);

    // Функция для форматирования данных
    const formatData = (data: any[], locale: string): Event[] => {
        return data.map((event: any) => ({
            id: event._id,
            title: locale === "en"
                ? event.title_en || t("Untitled")
                : event.title || t("Без названия"),
            description: locale === "en"
                ? event.description_en || t("No description available.")
                : event.description || t("Описание отсутствует."),
            startDate: event.startDate,
            endDate: event.endDate,
            organizer: locale === "en"
                ? event.organizer_en || t("Unknown organizer")
                : event.organizer || t("Неизвестный организатор"),
            eventType: locale === "en"
                ? event.eventType_en || t("Not specified")
                : event.eventType || t("Тип не указан"),
            image: event.image || "/default-placeholder.png",
        }));
    };
    useEffect(() => {
        filterEvents();
        setCurrentPage(1); // Сбрасываем текущую страницу при изменении фильтров
    }, [eventType, timeFilter, selectedDate, searchQuery]);

    const filterEvents = () => {
        let filtered = events;

        // Фильтр по времени (прошедшие, предстоящие, все)
        if (timeFilter !== "all") {
            const now = new Date();
            filtered = filtered.filter((event) => {
                const start = new Date(event.startDate);
                const end = new Date(event.endDate);

                if (timeFilter === "past") return end < now;
                if (timeFilter === "upcoming") return start >= now || (start <= now && end >= now);
                return true;
            });
        }

        // Фильтр по типу мероприятия
        if (eventType !== "all") {
            filtered = filtered.filter((event) => event.eventType === eventType);
        }

        // Фильтр по выбранной дате
        if (selectedDate) {
            filtered = filtered.filter((event) => {
                const eventStart = new Date(event.startDate).setHours(0, 0, 0, 0); // Обнуляем время для сравнения только даты
                const eventEnd = new Date(event.endDate).setHours(23, 59, 59, 999); // Устанавливаем конец дня
                const selected = selectedDate.setHours(0, 0, 0, 0); // Обнуляем время выбранной даты

                return selected >= eventStart && selected <= eventEnd;
            });
        }


        // Фильтр по названию
        if (searchQuery) {
            filtered = filtered.filter((event) =>
                event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }


        setFilteredEvents(filtered);
    };

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleCardClick = (id: string) => {
        router.push(`/exhibition/${id}`);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    // if (loading) {
    //     return <p className="text-center text-lg">{t("Загрузка...")}</p>;
    // }

    return (
        <section data-aos="fade-up" className="min-h-screen">
            <div  data-aos="fade-up"  className="max-w-[1350px] mx-auto py-8 px-4">
                {/* Заголовок страницы */}

                <div
                    className="flex flex-col md:flex-row items-center  justify-start mb-8 md:mb-16 mt-10 relative">
                    <div className="flex items-center">
                        <h1 className="text-3xl sm:text-2xl lg:text-4xl font-bold rounded-2xl text-white inline-block px-3 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-orange border-dashed border-2 border-orange text-center flex items-center">
                            {t("Календарь мероприятий")}
                            <CalendarDays
                                className="w-10 h-10 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white ml-3"/>
                        </h1>
                    </div>

                    {/* Текст справа от заголовка */}
                    <p className="text-black text-sm md:text-base text-center md:text-left leading-tight md:ml-8 mt-4 md:mt-0 max-w-full md:max-w-[300px]">
                        {t("Используйте фильтры ниже, чтобы найти интересующие вас мероприятия.")}
                    </p>
                </div>


                {/* Панель фильтров */}
                <div className="bg-lightGray p-4 md:p-6 rounded-3xl shadow-xl mb-16">
                    {/* Фильтры */}
                    <div className="flex flex-wrap justify-between text-center gap-4">
                        {/* Фильтр по времени */}
                        <div className="flex flex-col w-full lg:w-1/5">
                            <label className="text-midGray font-semibold mb-2">{t("Фильтр по времени")}</label>
                            <select
                                value={timeFilter}
                                onChange={(e) => setTimeFilter(e.target.value)}
                                className="px-4 py-3 bg-midGray text-white rounded-2xl border border-white focus:outline-none focus:ring-4 focus:ring-white appearance-none"
                                style={{
                                    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'white\' viewBox=\'0 0 20 20\'%3e%3cpath d=\'M10 12l-5-5h10l-5 5z\'/%3e%3c/svg%3e")',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 0.75rem center",
                                    backgroundSize: "1.5em 1.5em",
                                }}
                            >
                                <option value="all">{t("Все")}</option>
                                <option value="past">{t("Прошедшие")}</option>
                                <option value="upcoming">{t("Предстоящие")}</option>
                            </select>
                        </div>

                        {/* Фильтр по типу */}
                        <div className="flex flex-col w-full lg:w-1/5">
                            <label className="text-midGray font-semibold mb-2">{t("Фильтр по типу")}</label>
                            <select
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                className="px-4 py-3 bg-midGray text-white rounded-2xl border border-white focus:outline-none focus:ring-4 focus:ring-white appearance-none"
                                style={{
                                    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'white\' viewBox=\'0 0 20 20\'%3e%3cpath d=\'M10 12l-5-5h10l-5 5z\'/%3e%3c/svg%3e")',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 0.75rem center",
                                    backgroundSize: "1.5em 1.5em",
                                }}
                            >
                                <option value="all">{t("Все типы")}</option>
                                <option value="large-scale">{t("Масштабные")}</option>
                                <option value="master-class">{t("Мастер-класс")}</option>
                                <option value="webinar">{t("Вебинар")}</option>
                            </select>
                        </div>
                        {/* Календарь */}
                        <div className="relative flex flex-col w-full lg:w-1/5">
                            <label className="text-midGray font-semibold mb-2">{t("Выберите дату")}</label>
                            <button
                                onClick={() => setShowCalendar(!showCalendar)}
                                className="px-4 py-3 bg-midGray text-left text-white rounded-2xl border border-white hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-white appearance-none"
                                style={{
                                    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'white\' viewBox=\'0 0 20 20\'%3e%3cpath d=\'M10 12l-5-5h10l-5 5z\'/%3e%3c/svg%3e")',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 0.75rem center",
                                    backgroundSize: "1.5em 1.5em",
                                }}
                            >
                                {selectedDate ? selectedDate.toLocaleDateString() : t("Выберите дату")}
                            </button>

                            {showCalendar && (
                                <div
                                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg shadow-lg p-4 w-80">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-lg font-bold">{t("Выберите дату")}</h2>
                                            <button
                                                onClick={() => setShowCalendar(false)}
                                                className="text-gray hover:text-gray-700"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        <Calendar
                                            selectedDate={selectedDate}
                                            onSelect={(date) => {
                                                setSelectedDate(date);
                                                setShowCalendar(false);
                                            }}
                                            className="border rounded-md shadow"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Кнопка очистить фильтры */}
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setTimeFilter("all");
                                setEventType("all");
                                setSelectedDate(null);
                            }}
                            className="w-full lg:w-1/5 px-6 py-3 bg-white text-darkGray border-2 border-midGray rounded-3xl hover:bg-midGray hover:text-white transition-all duration-300 ease-in-out"
                        >
                            {t("Очистить фильтры")}
                        </button>
                    </div>

                    {/* Поиск по названию */}
                    <div
                        className="flex items-center border-2 border-midGray rounded-2xl shadow-sm mt-8 mb-4">
                        <input
                            type="text"
                            placeholder={t("Введите название")}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow px-6 py-3 text-lg focus:outline-none rounded-2xl"
                        />
                    </div>
                </div>


                {/* Список карточек */}
                <div className="grid grid-cols-1 gap-6 mb-12">
                    {currentEvents.length > 0 ? (
                        currentEvents.map((event) => (
                            <div
                                key={event.id}
                                onClick={() => handleCardClick(event.id)}
                                className="flex flex-col md:flex-row w-full bg-white rounded-3xl shadow-md transition-shadow duration-500 border border-b-8 hover:shadow-orange cursor-pointer"
                            >
                                {/* Левая часть с изображением и текстом */}
                                <div className="flex flex-col md:flex-row w-full md:w-3/5 p-4">
                                    {event.image && (
                                        <div className="w-full md:w-40 h-40 flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover rounded-xl"
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-col justify-center">
                                        {/* Тип мероприятия */}
                                        <div className="inline-flex">
                            <span
                                className="bg-lightGray text-gray-700 uppercase font-medium text-base px-2 py-0.5 rounded-lg mb-4">
                                {event.eventType}
                            </span>
                                        </div>

                                        {/* Название */}
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                                            {event.title}
                                        </h3>
                                        {/* Описание */}
                                        <p className="text-gray-600 text-lg">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Правая часть с датами и организатором */}
                                <div className="w-full md:w-1/3 flex flex-col justify-center p-4">
                                    <div className="flex flex-wrap items-center justify-start gap-2 mb-4">
                                        <div className="bg-orange text-white px-4 py-1 rounded-md text-lg font-medium">
                                            {formatDate(event.startDate)}
                                        </div>
                                        <span className="text-gray-600">-</span>
                                        <div className="bg-orange text-white px-4 py-1 rounded-md text-lg font-medium">
                                            {formatDate(event.endDate)}
                                        </div>
                                    </div>
                                    {/* Организатор */}
                                    <p className="text-gray-700 text-lg md:text-base lg:text-lg">
                                        <strong>{t("Организатор")}:</strong> {event.organizer}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">{t("Нет мероприятий для отображения.")}</p>
                    )}
                </div>


                {/* Пагинация */}
                {filteredEvents.length > 0 && (
                    <div className="flex justify-center mt-4">
                        <Pagination>
                            <PaginationContent>
                                {/* Кнопка "Назад" */}
                                <PaginationItem>
                                    <PaginationPrevious
                                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    />
                                </PaginationItem>

                                {/* Кнопки страниц */}
                                {Array.from(
                                    {length: Math.ceil(filteredEvents.length / eventsPerPage)},
                                    (_, index) => index + 1
                                ).map((page) => (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            isActive={currentPage === page}
                                            onClick={() => setCurrentPage(page)}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                {/* Кнопка "Вперёд" */}
                                <PaginationItem>
                                    <PaginationNext
                                        onClick={() =>
                                            setCurrentPage(
                                                Math.min(
                                                    currentPage + 1,
                                                    Math.ceil(filteredEvents.length / eventsPerPage)
                                                )
                                            )
                                        }
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                )}


            </div>
        </section>
    );
};

export default CalendarPage;
