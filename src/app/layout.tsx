import "./globals.css";

export const metadata = {
    title: "OPT Ceiling",
    description: "Сайт компании OPT Ceiling",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="font-space-grotesk antialiased">{children}</body>
        </html>
    );
}
