import { NextResponse } from 'next/server';


export function middleware(req) {


    const authHeader = req.headers.get('authorization');


    // Логин и пароль для базовой авторизации
    const username = 'admin';
    const password = 'password';
    const base64Auth = Buffer.from(`${username}:${password}`).toString('base64');
    const expectedAuth = `Basic ${base64Auth}`;



    // Проверка заголовка Authorization
    if (authHeader !== expectedAuth) {
        console.log('Authorization failed. Sending Unauthorized response.');
        return new Response('Unauthorized', {
            status: 401,
            headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' },
        });
    }

    console.log('Authorization successful. Proceeding to next middleware.');
    // Если авторизация успешна, продолжаем обработку
    return NextResponse.next();
}

// Применение middleware только к маршрутам внутри /admin-panel-123
export const config = {
    matcher: '/admin-panel-123/:path*',
};
