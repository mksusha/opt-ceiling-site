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
                        МЫ СОЗДАЕМ НЕ ПРОСТО ВЫСТАВКУ — <span className="text-[#FF551A]">МЫ СОЗДАЕМ ДРАЙВ</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6">
                        Ключевая цель нашего мероприятия — обмен реальным опытом, полное погружение в самые современные решения,
                        комьюнити единомышленников, где вы будете не только работать, но и отдыхать.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mt-4">
                        Для этого мы организуем регулярные события, на которые приглашаем представителей известных брендов потолочной индустрии.
                    </p>
                </div>
            </div>
        </div>
    );
}
