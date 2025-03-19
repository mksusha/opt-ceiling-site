import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-white text-black py-20 px-6 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 min-h-[600px]">
                {/* Большое круглое изображение слева */}
                <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
                    <div className="absolute inset-0 bg-white rounded-full shadow-xl overflow-hidden">
                        <Image
                            src="/nevsky1.jpg"
                            alt="Фото мероприятия"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                {/* Текстовый блок справа */}
                <div className="flex-1 max-w-xl text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
                        Ключевая цель — <span className="text-[#FF551A]">обмен реальным опытом</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6">
                        В первую очередь наши мероприятия направлены на решение запросов потолочников.
                        Для этого мы организуем регулярные события, на которые приглашаем представителей
                        известных брендов потолочной индустрии.
                    </p>
                    <p className="text-lg md:text-2xl font-bold text-black mt-6 md:mt-8">
                        Мы общаемся, развиваемся, а еще отлично проводим время!
                    </p>
                </div>
            </div>
        </div>
    );
}