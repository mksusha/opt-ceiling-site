"use client";

export default function PartnerCallBlock() {
    return (
        <section className="relative bg-gradient-to-r mt-24 from-[#f6431d] to-[#f9572a] py-16 px-4 md:px-8 overflow-hidden">
            {/* Верхний декоративный угол */}
            <div className="absolute top-0  left-0 w-full h-12 bg-white [clip-path:polygon(0_60%,100%_0,100%_100%,0_100%)] z-0" />

            <div className="relative max-w-[1350px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-10">
                <div className="text-white px-5  text-center md:text-left">
                    <h2 className="text-2xl pt-10 md:text-3xl lg:text-4xl font-bold leading-snug mb-2">
                        Используйте площадку <span>ДРАЙВА</span> по максимуму.
                    </h2>
                    <p className="text-xl md:text-3xl font-bold">
                        Примите участие в качестве партнёра!
                    </p>
                </div>

                <a
                    href="https://t.me/juliakaldybaeva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#1e1e1e] hover:bg-white/80 transition-all font-semibold px-6 py-3 rounded-xl shadow-lg whitespace-nowrap"
                >
                    СТАТЬ ПАРТНЕРОМ ДРАЙВА
                </a>
            </div>
        </section>
    );
}
