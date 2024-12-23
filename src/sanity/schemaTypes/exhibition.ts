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
            title: 'Event Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Conference', value: 'conference' },
                    { title: 'Art', value: 'art' },
                    { title: 'Technology', value: 'technology' },
                    { title: 'Other', value: 'other' },
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
                    { title: 'Conference', value: 'conference' },
                    { title: 'Art', value: 'art' },
                    { title: 'Technology', value: 'technology' },
                    { title: 'Other', value: 'other' },
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
