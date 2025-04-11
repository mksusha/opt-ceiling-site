import React from "react";

export default function OrganizersSection() {
    const organizers = [
        { src: "/optlogo.svg", alt: "Организатор 1", padding: "p-0" },
        { src: "/logo-opt-nevsky2.svg", alt: "Организатор 2", padding: "p-16" },
    ];

    return (
        <div className="w-full max-w-[1350px] mx-auto px-5 pt-20 bg-white">
            <div className="mb-12">
                <h3
                    className="font-bold text-black text-4xl sm:text-6xl mb-10 sm:mb-16 uppercase text-center"
                    style={{
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    Организаторы
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-5 p-6 rounded-lg">
                    {organizers.map((logo, index) => (
                        <div key={index}
                             className={`flex justify-center p-4 bg-gray-100 rounded-lg partner-card shadow-md ${logo.padding}`}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className={`rounded-[19px] p-2 ${logo.padding}`}
                                style={{
                                    width: "600px",
                                    height: "300px",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
