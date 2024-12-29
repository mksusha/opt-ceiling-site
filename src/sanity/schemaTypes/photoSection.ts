import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'photoSection',
    title: 'Photo Section',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Позволяет кадрировать изображение
            },
            description: 'Загрузите фото',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            description: 'Дата публикации',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'titleRu',
            title: 'Title (Russian)',
            type: 'string',
            description: 'Название на русском',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'titleEn',
            title: 'Title (English)',
            type: 'string',
            description: 'Название на английском',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'Ссылка, которая откроется в новом окне',
            validation: (Rule) =>
                Rule.required().uri({
                    scheme: ['http', 'https'], // Проверка на корректный URL
                }),
        }),
    ],
});
