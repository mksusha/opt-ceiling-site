
export default {
    name: 'aboutPage',
    title: 'О компании',
    type: 'document',
    fields: [
        {
            name: 'title_ru',
            title: 'Заголовок (RU)',
            type: 'string',
            description: 'Введите заголовок на русском языке',
        },
        {
            name: 'title_en',
            title: 'Title (EN)',
            type: 'string',
            description: 'Enter the title in English',
        },
        {
            name: 'content_ru',
            title: 'Текст (RU)',
            type: 'text',
            description: 'Введите текст на русском языке',
        },
        {
            name: 'content_en',
            title: 'Content (EN)',
            type: 'text',
            description: 'Enter the text in English',
        },
    ],
};