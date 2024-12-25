import { defineType } from 'sanity';

export default defineType({
    name: 'exhibition',
    title: 'Exhibition',
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
            type: 'datetime',
            description: 'Дата начала выставки',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'datetime',
            description: 'Дата окончания выставки',
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
            title: 'Event Type (English)',
            type: 'string',
            options: {
                list: [
                    { title: 'Large-scale', value: 'large-scale' },
                    { title: 'Master class', value: 'master-class' },
                    { title: 'Webinar', value: 'webinar' },
                ],
            },

            description: 'Тип мероприятия на английском языке',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Изображение выставки',
            options: {
                hotspot: true, // Включает возможность настройки фокуса
            },
        },
    ],
});
