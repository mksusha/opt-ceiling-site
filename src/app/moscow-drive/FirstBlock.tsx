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
                        ВЫСТАВКА? НЕТ!{" "}
                        <span className="text-[#FF551A]">ЭТО ЭНЕРГИЯ, АТМОСФЕРА, ДРАЙВ!</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6">
                        Наша главная задача — создать пространство для обмена практическим опытом,
                        погружения в современные решения и общения в кругу единомышленников, где есть
                        место и работе, и отдыху. Для этого мы регулярно проводим мероприятия с участием
                        представителей ведущих брендов потолочной индустрии.
                    </p>
                    <p className="text-lg md:text-2xl font-bold text-black mt-6 md:mt-8">
                        Современные идеи, сильные бренды и комьюнити, которое заряжает.
                    </p>
                </div>
            </div>
        </div>
    );
}
