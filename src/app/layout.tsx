import "./globals.css";

export const metadata = {
    title: "OPT Ceiling",
    description: "Сайт компании OPT Ceiling",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className="font-Inter antialiased">{children}</body>
        </html>
    );
}
