import React from "react";

export default function OrganizersSection() {
    const organizers = [
        { src: "/drive/OPTd.png", alt: "Организатор 1" },
    ];

    return (
        <div className="w-full mx-auto px-5 pt-20 bg-midGray">
            <div className="max-w-[1350px] w-full mx-auto">
                <h3
                    className="font-bold text-white text-4xl sm:text-6xl mb-10 sm:mb-16 uppercase text-center"
                    style={{
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    Организаторы
                </h3>
                <div className="flex justify-center pb-20 p-8">
                    <div className="flex justify-center bg-gray-100 rounded-lg partner-card shadow-md p-4">
                        <img
                            src={organizers[0].src}
                            alt={organizers[0].alt}
                            className="rounded-[19px] p-2"
                            style={{
                                width: "600px",
                                height: "300px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
