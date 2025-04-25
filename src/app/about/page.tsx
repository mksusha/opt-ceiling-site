// ❌ Удаляем dynamic импорт
// ❌ Без "use client" — это серверный компонент!

import About from "./About"; // Прямой импорт

export const metadata = {
    title: "О компании OPT Ceiling",
    description: "О нас страница сайта",
};

export default function AboutPage() {
    return <About />;
}
