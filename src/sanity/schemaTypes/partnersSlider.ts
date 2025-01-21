import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'partnersSlider',
    title: 'Слайдер на странице парнерам',
    type: 'document',
    fields: [
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                            description: 'Описание изображения для SEO и доступности',
                        },
                    ],
                },
            ],
        }),
    ],
});