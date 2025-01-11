"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import PartnersSlider from "./PartnersSlider";

const VisitorsInfo = () => {
    const { t } = useTranslation();

    return (
        <div className="px-5 max-w-[1350px] mx-auto">
            <div className="flex flex-col md:flex-row items-center  justify-start mb-6 md:mb-12 mt-24 relative">
                <div className="flex items-center">
                    <h2
                        id="visitors"
                        className="text-3xl sm:text-2xl lg:text-4xl font-bold rounded-2xl text-white inline-block px-3 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-orange border-dashed border-2 border-orange text-center flex items-center"
                    >
                        {t("Информация для посетителей")}
                    </h2>
                </div>

            </div>
            <p className="mb-4 text-lg">{t("Уважаемый посетитель!")}</p>
            <p className="mb-4 text-lg">
                {t("Благодарим вас за интерес, проявленный к нашей выставке!")}
            </p>
            <p className="mb-4 text-lg">
                {t(
                    "Чтобы ваше посещение стало максимально продуктивным и комфортным, рекомендуем заранее спланировать своё пребывание."
                )}
            </p>
            <div className="mb-4 text-lg">
                <p>{t("Пройдите предварительную регистрацию на нашем сайте, чтобы получить электронный билет.")}</p>
                <p>
                    {t(
                        "Распечатайте билет, предъявите его в зоне регистрации и получите бейдж для входа на территорию выставки."
                    )}
                </p>
            </div>
            <p className="mb-4 text-lg">
                {t(
                    "Мы будем рады видеть вас на выставке и уверены, что ваше посещение принесет множество полезных контактов, идей и возможностей!"
                )}
            </p>
            <p className="mb-10 text-lg">{t("До встречи!")}</p>
            <PartnersSlider></PartnersSlider>
            <h2 className="text-2xl font-bold rounded-2xl inline-block px-4 py-2 border-dashed border-2 border-orange mb-6">
                {t("Полезные советы для эффективного посещения выставки")}
            </h2>
            <p className="mb-4 text-lg">
                {t("Чтобы максимально эффективно использовать время на выставке, следуйте этим рекомендациям:")}
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">{t("Подготовка к посещению")}</h3>
            <ul className="mb-4 list-none text-lg">
                <li>
                    <span className="font-bold">1.</span>{" "}
                    {t(
                        "Изучите тематику и участников: Заранее ознакомьтесь с профилем экспонентов и планом экспозиции на сайте выставки. Если информация недоступна, запросите её у организаторов."
                    )}
                </li>
                <li>
                    <span className="font-bold">2.</span>{" "}
                    {t(
                        "Составьте график мероприятий: Изучите деловую программу выставки, выберите интересные мероприятия и спланируйте время так, чтобы успеть и посетить стенды, и принять участие в деловой программе."
                    )}
                </li>
                <li>
                    <span className="font-bold">3.</span>{" "}
                    {t(
                        "Назначьте встречи заранее: Воспользуйтесь сервисом MatchMaking на сайте выставки. Он поможет заранее связаться с участниками, согласовать повестку переговоров и запланировать встречи."
                    )}
                </li>
                <li>
                    <span className="font-bold">4.</span>{" "}
                    {t(
                        "Спланируйте дорогу: Изучите схему проезда и выберите оптимальный маршрут. Если вы приедете на автомобиле, уточните, где расположены парковки."
                    )}
                </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-4">{t("На выставке")}</h3>
            <ul className="mb-4 list-none text-lg">
                <li>
                    <span className="font-bold">5.</span>{" "}
                    {t(
                        "Изучите инфраструктуру: Узнайте, где находятся точки для печати, зоны с доступом в интернет, копировальные аппараты и другие полезные сервисы. Это упростит решение организационных задач."
                    )}
                </li>
                <li>
                    <span className="font-bold">6.</span>{" "}
                    {t(
                        "Используйте каталоги и путеводители: Каталог поможет быстро найти интересующих экспонентов, а путеводитель подскажет план экспозиции и программу мероприятий."
                    )}
                </li>
                <li>
                    <span className="font-bold">7.</span>{" "}
                    {t(
                        "Назначайте встречи с клиентами и партнёрами: Используйте выставку как платформу для деловых встреч в бизнес-зоне или удобных кафе и ресторанах на территории выставочного центра."
                    )}
                </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-4">{t("Дополнительные рекомендации")}</h3>
            <ul className="mb-4 list-none text-lg">
                <li>
                    <span className="font-bold">8.</span>{" "}
                    {t(
                        "Забронируйте всё заранее: Если вы приезжаете из другого города, заранее позаботьтесь о бронировании гостиницы и билетов на транспорт."
                    )}
                </li>
                <li>
                    <span className="font-bold">9.</span>{" "}
                    {t(
                        "Подготовьте материалы: Возьмите с собой достаточное количество визитных карточек и другой необходимой информации о вашей компании."
                    )}
                </li>
                <li>
                    <span className="font-bold">10.</span>{" "}
                    {t(
                        "Поставьте цели: Определите задачи, которые вы хотите решить на выставке, и составьте план действий."
                    )}
                </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-4">{t("После выставки")}</h3>
            <ul className="mb-4 list-none text-lg">
                <li>
                    <span className="font-bold">11.</span>{" "}
                    {t(
                        "Обработайте данные: Уделите внимание анализу полученной информации и поддержанию контактов, установленных во время выставки. Это поможет извлечь максимальную пользу из участия."
                    )}
                </li>
            </ul>
            <p className="mb-4 text-lg">
                {t(
                    "Следуя этим советам, вы сможете сделать посещение выставки продуктивным и комфортным!"
                )}
            </p>
            <div   id="registration" className="flex flex-col md:flex-row items-center justify-start mb-6 md:mb-12 mt-16 relative">
                <div className="flex items-center">
                    <h2

                        className="text-3xl sm:text-2xl lg:text-4xl font-bold rounded-2xl text-white inline-block px-3 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-orange border-dashed border-2 border-orange text-center flex items-center"
                    >
                        {t("Порядок регистрации")}
                    </h2>
                </div>
            </div>
            <p className="mb-4 text-lg">
                {t("Порядок регистрации посетителей на выставочно-конгрессных мероприятиях")}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-lg">
                <span className="font-bold">1.</span> {t("Общие положения")}
            </h3>
            <div className="space-y-2 text-lg">
                <p>
                    <span className="font-bold">1.1.</span>{" "}
                    {t(
                        "Настоящий порядок определяет правила регистрации на мероприятия, организуемые ОптСилингЕвент (далее — Мероприятие), включая использование онлайн-регистрации и системы назначения деловых встреч MatchMaking (далее — Сервисы)."
                    )}
                </p>
                <p>
                    <span className="font-bold">1.2.</span>{" "}
                    {t("Посетитель обязан предоставлять достоверные данные о себе при регистрации.")}
                </p>
                <p>
                    <span className="font-bold">1.3.</span>{" "}
                    {t(
                        "После завершения онлайн-регистрации и получения электронного билета участник получает доступ к системе MatchMaking, вход в которую осуществляется с использованием тех же учетных данных, что и для онлайн-регистрации."
                    )}
                </p>
                <p>
                    <span className="font-bold">1.4.</span>{" "}
                    {t("Передача учетных данных (логин и пароль) третьим лицам не рекомендуется.")}
                </p>
                <p>
                    <span className="font-bold">1.5.</span>{" "}
                    {t("Завершение регистрации подтверждает согласие посетителя с условиями данного Порядка.")}
                </p>
                <p>
                    <span className="font-bold">1.6.</span>{" "}
                    {t("Организатор оставляет за собой право вносить изменения в Порядок без предварительного уведомления.")}
                </p>
                <p>
                    <span className="font-bold">1.7.</span>{" "}
                    {t(
                        "В случае несоблюдения Порядка доступ к Сервисам может быть заблокирован без уведомления и объяснения причин."
                    )}
                </p>
                <p>
                    <span className="font-bold">1.8.</span>{" "}
                    {t(
                        "Организатор не несет ответственности за возможные убытки, связанные с использованием Сервисов и регистрацией на входах на выставочные мероприятия."
                    )}
                </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-lg">
                <span className="font-bold">2.</span> {t("Регистрация на Мероприятие")}
            </h3>
            <p className="text-lg">
                {t("Для посещения мероприятия необходимо пройти процедуру регистрации одним из следующих способов:")}
            </p>

            <h4 className="text-lg font-medium mt-4 mb-2">
                <span className="font-bold">2.1.</span> {t("Онлайн-регистрация на сайте Мероприятия:")}
            </h4>
            <ul className="list-disc list-inside ml-5 text-lg">
                <li>{t("Заполните регистрационную форму, указав адрес электронной почты.")}</li>
                <li>{t("Получите персональный электронный билет на указанный адрес.")}</li>
                <li>{t("Распечатайте билет для предъявления на мероприятии.")}</li>
            </ul>

            <h4 className="text-lg font-medium mt-4 mb-2">
                <span className="font-bold">2.2.</span>{" "}
                {t("Регистрация на входах в залы мероприятий (в случае отсутствия электронного или пригласительного билета):")}
            </h4>
            <ul className="list-disc list-inside ml-5 text-lg">
                <li>{t("Приобретите входной билет в одной из касс выставочного центра.")}</li>
                <li>{t("Заполните и подпишите печатную анкету посетителя в зоне регистрации.")}</li>
            </ul>

            <h4 className="text-lg font-medium mt-4 mb-2">
                <span className="font-bold">2.3.</span> {t("Получение бейджа посетителя:")}
            </h4>
            <div className="text-lg">
                <p>
                    {t("Обменяйте")}
                    <span>:</span>
                </p>
                <ul className="list-disc list-inside ml-5">
                    <li>{t("Распечатанный электронный билет;")}</li>
                    <li>{t("Входной билет и заполненную анкету;")}</li>
                    <li>{t("Или пригласительный билет и заполненную анкету на бейдж установленного образца.")}</li>
                    <li>{t("Бейдж выдается на стойке регистрации на входах в течение работы мероприятия.")}</li>
                </ul>
            </div>

            <p className="mt-4 text-lg">
                {t(
                    "Выдача бейджа подтверждает успешное завершение регистрации и предоставляет доступ на территорию выставки."
                )}
            </p>
            <p className="mt-4 text-lg">
                {t(
                    "Следуйте этим правилам для комфортного посещения мероприятия и беспрепятственного доступа к его сервисам."
                )}
            </p>
        </div>
    );
};

export default VisitorsInfo;