import React from "react";

export default function OrganaizersSection() {
    const organizers = [
        { src: "/drive/OPTd.png", alt: "Организатор 1", padding: "p-0" },
        { src: "/logo-opt-nevsky2.svg", alt: "Организатор 2", padding: "p-16" },
    ];

    return (
        <div className="w-full mx-auto px-5 pt-20 bg-midGray">
            <div className="max-w-[1350px] w-full mx-auto " >
            <div className="">
                <h3
                    className="font-bold text-white text-4xl pt-5 sm:text-6xl mb-10 sm:mb-16 uppercase text-center"
                    style={{
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    Организаторы
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-20  p-8 rounded-lg">
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
        </div>
    );
}
