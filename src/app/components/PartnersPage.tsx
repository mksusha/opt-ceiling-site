import React, { useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { FiTarget, FiSmile, FiBox, FiShoppingCart, FiEye, FiTrendingUp } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import ParticipantForm from "@/app/components/ParticipantForm";
import {Check, Handshake} from "lucide-react";

const PartnersPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации
            offset: 50, // Смещение появления
            easing: 'ease-in-out', // Тип анимации
        });
    }, []);
    // Создаем реф для формы с типом HTMLDivElement
    const formRef = useRef<HTMLDivElement>(null);

    // Обработчик скролла к форме
    const handleScrollToForm = () => {
        if (formRef.current) {
            const isMobile = window.innerWidth <= 768; // Определяем, является ли устройство мобильным
            const offset = isMobile ? 100 : 30; // 100px для мобильных, 50px для десктопа
            const top = formRef.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }
    };



    return (
        <div className="min-h-screen">
            <div className="max-w-[1350px] mx-auto py-8 px-4">
                <div
                    className="flex flex-col md:flex-row items-center md:items-center justify-start mb-4 md: mt-6 relative lg:mb-0">
                    {/* Заголовок */}
                    <div id="partners" className="flex items-center">
                        <h1 className="text-3xl sm:text-2xl lg:text-4xl font-bold rounded-2xl text-white inline-block px-3 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-orange border-dashed border-2 border-orange text-center flex items-center">
                            {t("Партнерам")}
                            <Handshake
                                className="w-10 h-10 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white ml-3"
                            />
                        </h1>
                    </div>


                </div>

                <div className="max-w-7xl mx-auto py-8">
                    <h2 className="text-2xl font-semibold text-midGray mb-6 text-center lg:text-left">
                        {t("Информация для участников")}
                    </h2>


                <p className="text-xl text-midGray p-3 lg:text-left mb-8">
                        {t("Уважаемые участники выставки! Мы рады предложить вам уникальные возможности для участия в нашем мероприятии! Воспользуйтесь комплексными рекламными и партнёрскими предложениями, которые мы разработали для решения различных маркетинговых задач вашей компании.")}
                    </p>
                    <h2 className="text-2xl font-semibold text-center lg:text-left text-midGray mb-6">
                        {t("Почему стоит стать партнером или спонсором?")}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <li
                            className="flex items-start bg-lightGray text-midGray p-6 rounded-3xl shadow-md"
                            data-aos="fade-right"
                        >
                            <span className="text text-3xl font-bold mr-4">1</span>
                            <p className="flex text-lg items-center">
                                {t("Выгодно выделиться на фоне конкурентов и привлечь внимание целевой аудитории.")}
                                <FiTarget className="ml-2 w-28 lg:w-12 h-auto text-orange" size={40}/>
                            </p>
                        </li>
                        <li
                            className="flex items-start bg-orange text-white p-6 rounded-3xl shadow-md"
                            data-aos="fade-left"
                        >
                            <span className="text-3xl font-bold mr-4">2</span>
                            <p className="flex text-lg items-center">
                                {t("Повысить узнаваемость и лояльность к бренду, закрепить позиции на рынке.")}
                                <FiSmile className="ml-2 w-28 lg:w-12 h-auto " size={40}/>
                            </p>
                        </li>
                        <li
                            className="flex items-start bg-midGray text-white p-6 rounded-3xl shadow-md"
                            data-aos="fade-right"
                        >
                            <span className="text-3xl font-bold mr-4">3</span>
                            <p className="flex text-lg items-center">
                                {t("Представить новый продукт или оборудование профессиональной аудитории.")}
                                <FiBox className="ml-2 w-28 lg:w-12 h-auto " size={40}/>
                            </p>
                        </li>
                        <li
                            className="flex items-start bg-lightGray text-midGray p-6 rounded-3xl shadow-md"
                            data-aos="fade-left"
                        >
                            <span className="text text-3xl font-bold mr-4">4</span>
                            <p className="flex text-lg items-center">
                                {t("Увеличить продажи через взаимодействие с целевой аудиторией.")}
                                <FiShoppingCart className="ml-2 w-28 lg:w-12 h-auto text-orange" size={40}/>
                            </p>
                        </li>
                        <li
                            className="flex items-start bg-orange text-white p-6 rounded-3xl shadow-md"
                            data-aos="fade-right"
                        >
                            <span className="text-3xl font-bold mr-4">5</span>
                            <p className="flex text-lg items-center">
                                {t("Привлечь внимание посетителей, создавая дополнительное информационное поле.")}
                                <FiEye className="ml-2 w-28 lg:w-12 h-auto " size={40}/>
                            </p>
                        </li>
                        <li
                            className="flex items-start bg-midGray text-white p-6 rounded-3xl shadow-md"
                            data-aos="fade-left"
                        >
                            <span className="text-3xl font-bold mr-4">6</span>
                            <p className="flex text-lg items-center">
                                {t("Провести рекламную кампанию, эффективно взаимодействуя с вашей целевой аудиторией.")}
                                <FiTrendingUp className="ml-2 w-28 lg:w-12 h-auto " size={40}/>
                            </p>
                        </li>
                    </ul>
                    <h2 className="text-2xl text-center font-semibold lg:text-left text-midGray mb-4">{t("Эксклюзивные Спонсорские Статусы")}</h2>
                    <p className="flex text-lg p-3 items-center">
                        {t("Доступные эксклюзивные статусы спонсорства открывают для вашей компании широкие возможности для демонстрации её лидерства и уникальности в дни проведения выставки. Обратите внимание, что количество эксклюзивных статусов ограничено.")}
                    </p>
                    <p className="p-3 text-lg text-midGray mb-8">
                        {t("Если вам интересна возможность стать спонсором или партнером выставки, отправьте нам заявку.")}</p>
                    <div className="text-center">

                        {/* Кнопка для скролла */}
                        <button
                            className=" bg-orange mt-5 mb-5 text-white lg:text-lg border-2 border-transparent hover:bg-transparent hover:border-orange hover:text-orange px-4 py-3 w-full lg:w-1/4 rounded-2xl text-sm lg:text-base transition-all lg:mt-3 duration-300 ease-in-out"
                            onClick={handleScrollToForm}
                        >
                            {t("Заполнить заявку")}
                        </button>
                    </div>
                </div>
                <div id="participation" className="max-w-7xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-6">
                        {/* Первый элемент аккордеона */}
                        <AccordionItem value="order">
                            <AccordionTrigger
                                className="text-2xl font-semibold hover:text-orange border-t-4 border-l-4 border-r-4 rounded-3xl rounded-b-none transition-colors duration-300 hover:border-gray-400 py-4 px-6"

                            >
                                {t("ПОРЯДОК УЧАСТИЯ")}
                            </AccordionTrigger>

                            <AccordionContent className="text-gray-800 p-3 text-base leading-relaxed mt-4">
                                <p>{t("Общие условия участия в мероприятии:")}</p>
                                <p className="mt-4">
                                    {t(
                                        "Цель наших мероприятий — объединить начинающих мастеров с опытными экспертами, представить лучшие решения на рынке и показать их практическое применение."
                                    )}
                                </p>
                                <ul className="mt-4 list-disc pl-5">
                                    <li>
                                        {t(
                                            "Организатор сохраняет нейтралитет при определении состава участников выставки. Партнеры могут предложить состав участников, однако окончательное решение остается за организатором."
                                        )}
                                    </li>
                                    <li>
                                        {t(
                                            "Организатор вправе отказать в участии, если счет не был оплачен в течение 5 рабочих дней."
                                        )}
                                    </li>
                                    <li>
                                        {t(
                                            "Партнер обязуется занять выделенное место на выставке, согласно пакету. По завершении выставки необходимо привести место в порядок."
                                        )}
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    {t(
                                        "Для оформления участия необходимо отправить заявку в \"ОптСилингИвент\" (ссылка). Прием заявок закрывается за 1 месяц до мероприятия."
                                    )}
                                </p>
                                <p className="mt-4">
                                    {t(
                                        "После согласования всех условий участия между \"ОптСилингИвент\" и участником заключается договор, как правило, не позднее 90 дней до монтажа."
                                    )}
                                </p>
                                <p className="mt-4">
                                    {t(
                                        "Участник оплачивает регистрационный сбор в размере, установленном ОптСилингИвент для конкретной выставки. Сбор взимается на общие рекламные и информационные расходы. При отказе от участия в выставке регистрационный сбор возврату не подлежит, если иное не оговорено в договоре."
                                    )}
                                </p>
                            </AccordionContent>

                        </AccordionItem>

                        {/* Второй элемент аккордеона */}
                        <AccordionItem value="rent">
                            <AccordionTrigger
                                className="text-2xl font-semibold hover:text-orange border-t-4 border-l-4 border-r-4 rounded-3xl rounded-b-none transition-colors duration-300 hover:border-gray-400 py-4 px-6"
                            >
                                {t("АРЕНДА ПЛОЩАДИ НА ВЫСТАВКЕ")}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-800 p-3 text-base leading-relaxed mt-4">
                                <p>{t("Стоимость аренды площади:")}</p>
                                <p className="mt-4">
                                    {t(
                                        "Стоимость аренды выставочных площадей зависит от статуса мероприятия, конфигурации и расположения стенда в павильоне. Более точную информацию можно получить после заполнения онлайн-заявки."
                                    )}
                                </p>
                                <p className="mt-4">{t("Оплата:")}</p>
                                <p>
                                    {t(
                                        "Компаниям, не погасившим задолженность за аренду площади или заказанные услуги, не будет разрешен монтаж."
                                    )}
                                </p>
                                <p className="mt-4">{t("Закрывающие документы:")}</p>
                                <p>
                                    {t(
                                        "Документы (акт сдачи-приемки, договор) выдаются в день мероприятия. Для получения документов представителю компании нужно подписать акт сдачи-приемки в период монтажа."
                                    )}
                                </p>
                            </AccordionContent>


                        </AccordionItem>
                    </Accordion>

                </div>
                <div id="application" ref={formRef}>
                    <ParticipantForm/>
                </div>
            </div>
        </div>
    )
        ;
    };

    export default PartnersPage;
