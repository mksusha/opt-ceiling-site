import { defineField } from 'sanity';

export default {
    name: 'news',
    title: 'Новости',
    type: 'document',
    fields: [
        {
            name: 'title_ru',
            title: 'Название (RU)',
            type: 'string'
        },
        {
            name: 'title_en',
            title: 'Название (EN)',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title_ru',
                maxLength: 96
            }
        },
        {
            name: 'date',
            title: 'Дата',
            type: 'date'
        },
        {
            name: 'cover_image',
            title: 'Обложка',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'gallery',
            title: 'Галерея фото',
            type: 'array',
            of: [{ type: 'image' }]
        },
        defineField({
            name: "text_ru",
            type: "object",
            title: "Текст новости (RU)",
            fields: [
                defineField({
                    name: "content",
                    type: "array",
                    title: "Контент",
                    of: [{ type: "block" }],
                }),
            ],
        }),
        defineField({
            name: "text_en",
            type: "object",
            title: "Текст новости (EN)",
            fields: [
                defineField({
                    name: "content",
                    type: "array",
                    title: "Контент",
                    of: [{ type: "block" }],
                }),
            ],
        }),
    ]
};
