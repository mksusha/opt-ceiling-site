import { defineType, defineField } from 'sanity';

export default defineType({
    name: "visitorsInfo",
    type: "document",
    title: "Информация для посетителей",
    fields: [
        // Первый заголовок
        defineField({
            name: "firstTitle",
            type: "object",
            title: "Первый заголовок",
            fields: [
                defineField({ name: "ru", type: "string", title: "Заголовок (RU)" }),
                defineField({ name: "en", type: "string", title: "Заголовок (EN)" }),
            ],
        }),
        // Первое интро
        defineField({
            name: "firstIntro",
            type: "object",
            title: "Первое введение",
            fields: [
                defineField({ name: "ru", type: "array", title: "Текст (RU)", of: [{ type: "block" }] }),
                defineField({ name: "en", type: "array", title: "Текст (EN)", of: [{ type: "block" }] }),
            ],
        }),
        // Первая секция
        defineField({
            name: "firstSection",
            type: "object",
            title: "Первая секция",
            fields: [
                defineField({
                    name: "sectionTitle",
                    type: "object",
                    title: "Заголовок секции",
                    fields: [
                        defineField({ name: "ru", type: "string", title: "Заголовок (RU)" }),
                        defineField({ name: "en", type: "string", title: "Заголовок (EN)" }),
                    ],
                }),
                defineField({
                    name: "sectionContent",
                    type: "object",
                    title: "Содержимое секции",
                    fields: [
                        defineField({ name: "ru", type: "array", title: "Текст (RU)", of: [{ type: "block" }] }),
                        defineField({ name: "en", type: "array", title: "Текст (EN)", of: [{ type: "block" }] }),
                    ],
                }),
                defineField({
                    name: "listItems",
                    type: "array",
                    title: "Список",
                    of: [
                        defineField({
                            name: "listItem",
                            type: "object",
                            title: "Элемент списка",
                            fields: [
                                defineField({ name: "ru", type: "string", title: "Текст (RU)" }),
                                defineField({ name: "en", type: "string", title: "Текст (EN)" }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
        // Второй заголовок
        defineField({
            name: "secondTitle",
            type: "object",
            title: "Второй заголовок",
            fields: [
                defineField({ name: "ru", type: "string", title: "Заголовок (RU)" }),
                defineField({ name: "en", type: "string", title: "Заголовок (EN)" }),
            ],
        }),
        // Второе интро
        defineField({
            name: "secondIntro",
            type: "object",
            title: "Второе введение",
            fields: [
                defineField({ name: "ru", type: "array", title: "Текст (RU)", of: [{ type: "block" }] }),
                defineField({ name: "en", type: "array", title: "Текст (EN)", of: [{ type: "block" }] }),
            ],
        }),
        // Вторая секция
        defineField({
            name: "secondSection",
            type: "object",
            title: "Вторая секция",
            fields: [
                defineField({
                    name: "sectionTitle",
                    type: "object",
                    title: "Заголовок секции",
                    fields: [
                        defineField({ name: "ru", type: "string", title: "Заголовок (RU)" }),
                        defineField({ name: "en", type: "string", title: "Заголовок (EN)" }),
                    ],
                }),
                defineField({
                    name: "sectionContent",
                    type: "object",
                    title: "Содержимое секции",
                    fields: [
                        defineField({ name: "ru", type: "array", title: "Текст (RU)", of: [{ type: "block" }] }),
                        defineField({ name: "en", type: "array", title: "Текст (EN)", of: [{ type: "block" }] }),
                    ],
                }),
                defineField({
                    name: "listItems",
                    type: "array",
                    title: "Список",
                    of: [
                        defineField({
                            name: "listItem",
                            type: "object",
                            title: "Элемент списка",
                            fields: [
                                defineField({ name: "ru", type: "string", title: "Текст (RU)" }),
                                defineField({ name: "en", type: "string", title: "Текст (EN)" }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ],
});