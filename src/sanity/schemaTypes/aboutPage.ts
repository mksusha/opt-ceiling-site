import { defineField } from "sanity";

export default defineField({
    name: "aboutPage",
    title: "О компании",
    type: "document",
    fields: [
        defineField({
            name: "title_ru",
            title: "Заголовок (RU)",
            type: "string",
            description: "Введите заголовок на русском языке",
        }),
        defineField({
            name: "title_en",
            title: "Title (EN)",
            type: "string",
            description: "Enter the title in English",
        }),
        defineField({
            name: "content_ru",
            type: "array",
            title: "Контент (RU)",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "content_en",
            type: "array",
            title: "Контент (EN)",
            of: [{ type: "block" }],
        }),
    ],
});
