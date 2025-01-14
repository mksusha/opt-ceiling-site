// schemas/contactInfo.js
export default {
    name: 'contactInfo',
    title: 'Контактная информация',
    type: 'document',
    fields: [
        {
            name: 'address_ru',
            title: 'Адрес (RU)',
            type: 'string',
            description: 'Введите адрес на русском языке'
        },
        {
            name: 'address_en',
            title: 'Address (EN)',
            type: 'string',
            description: 'Enter the address in English'
        },
        {
            name: 'map_code',
            title: 'Код карты',
            type: 'text',
            description: 'Вставьте код карты (например, iframe)'
        },
        {
            name: 'phone',
            title: 'Номер телефона',
            type: 'string',
            description: 'Введите номер телефона'
        },
        {
            name: 'email',
            title: 'Электронная почта',
            type: 'string',
            description: 'Введите адрес электронной почты'
        }
    ]
};