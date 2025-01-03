// schemas/news.js
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
        {
            name: 'text_ru',
            title: 'Текст новости (RU)',
            type: 'text'
        },
        {
            name: 'text_en',
            title: 'Текст новости (EN)',
            type: 'text'
        }
    ]
};
