import { defineType } from 'sanity';

export default defineType({
    name: 'exhibition',
    title: 'Выставки',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Название выставки',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title_en',
            title: 'Title (English)',
            type: 'string',
            description: 'Название выставки на английском языке',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Описание выставки',
        },
        {
            name: 'description_en',
            title: 'Description (English)',
            type: 'text',
            description: 'Описание выставки на английском языке',
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            description: 'Дата начала выставки',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            description: 'Дата окончания выставки',
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string',
            description: 'Время проведения (например, с 14:00 до 16:00)',
        },
        {
            name: 'time_en',
            title: 'Time (English)',
            type: 'string',
            description: 'Время проведения на английском языке',
        },
        {
            name: 'organizer',
            title: 'Organizer',
            type: 'string',
            description: 'Организатор выставки',
        },
        {
            name: 'organizer_en',
            title: 'Organizer (English)',
            type: 'string',
            description: 'Организатор выставки на английском языке',
        },
        {
            name: 'organizer2',
            title: 'Second Organizer',
            type: 'string',
            description: 'Второй организатор',
        },
        {
            name: 'organizer2_en',
            title: 'Second Organizer (English)',
            type: 'string',
            description: 'Второй организатор на английском языке',
        },
        {
            name: 'partner',
            title: 'Partner',
            type: 'string',
            description: 'Партнер выставки',
        },
        {
            name: 'partner_en',
            title: 'Partner (English)',
            type: 'string',
            description: 'Партнер выставки на английском языке',
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
            description: 'Контактный номер телефона (например, Тел.: +7 495 154-51-00)',
        },
        {
            name: 'website',
            title: 'Website',
            type: 'url',
            description: 'Ссылка на сайт (например, Web: shtok.pro)',
        },
        {
            name: 'eventType',
            title: 'Тип мероприятия',
            type: 'string',
            options: {
                list: [
                    { title: 'Масштабное', value: 'Масштабное' },
                    { title: 'Мастер-класс', value: 'Мастер-класс' },
                    { title: 'Вебинар', value: 'Вебинар' },
                ],
            },
            description: 'Тип мероприятия',
        },
        {
            name: 'eventType_en',
            title: 'Event Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Large-scale', value: 'Large-scale' },
                    { title: 'Masterclass', value: 'Masterclass' },
                    { title: 'Webinar', value: 'Webinar' },
                ],
            },
            description: 'Type of event',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'Место проведения (например, г. Москва, Востряковский проезд, д. 10Б, стр. 16)',
            hidden: ({ parent }) => parent?.eventType !== 'Мастер-класс',
        },
        {
            name: 'location_en',
            title: 'Location (English)',
            type: 'string',
            description: 'Место проведения на английском языке',
            hidden: ({ parent }) => parent?.eventType !== 'Мастер-класс',
        },
        {
            name: 'mapCode',
            title: 'Map Code',
            type: 'text',
            description: 'Код карты (для Мастер-классов)',
            hidden: ({ parent }) => parent?.eventType !== 'Мастер-класс',
        },
        {
            name: 'invitationLink',
            title: 'Invitation Link',
            type: 'url',
            description: 'Пригласительная ссылка (для Вебинаров)',
            hidden: ({ parent }) => parent?.eventType !== 'Вебинар',
        },
        {
            name: 'recording',
            title: 'Webinar Recording',
            type: 'string',
            description: 'Запись вебинара (Будет доступна после завершения)',
            hidden: ({ parent }) => parent?.eventType !== 'Вебинар',
        },
        {
            name: 'video',
            title: 'Event Video',
            type: 'text',
            description: 'Видео с мероприятия (для масштабных мероприятий)',
            hidden: ({ parent }) => parent?.eventType !== 'Масштабное',
        },
        {
            name: 'slider',
            title: 'Event Photos Slider',
            type: 'array',
            of: [{ type: 'image' }],
            description: 'Фото с мероприятия (для масштабных мероприятий)',
            hidden: ({ parent }) => parent?.eventType !== 'Масштабное',
        },
        {
            name: 'redirectButton',
            title: 'Redirect Button',
            type: 'url',
            description: 'Кнопка для перехода на сайт выставки (для масштабных мероприятий)',
            hidden: ({ parent }) => parent?.eventType !== 'Масштабное',
        },
        {
            name: 'theme',
            title: 'Theme',
            type: 'array',
            description: 'Тематика проведения мероприятия',
            of: [{ type: 'string' }], // Список строк
        },
        {
            name: 'theme_en',
            title: 'Theme (English)',
            type: 'array',
            description: 'Тематика проведения мероприятия на английском языке',
            of: [{ type: 'string' }], // Список строк
        },

        {
            name: 'banner',
            title: 'Banner',
            type: 'image',
            description: 'Баннер выставки',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Изображение выставки',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'videoList',
            title: 'Video List',
            type: 'array',
            of: [
                {
                    type: 'text',
                    description: 'Код видео с ВКонтакте или Дзена',
                },
            ],
            description: 'Список видео по коду',
        },
        {
            name: 'photoList',
            title: 'Photo List',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
            description: 'Список фотографий',
        },
    ],
});
