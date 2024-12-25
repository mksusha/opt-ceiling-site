"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

interface CalendarProps {
    selectedDate: Date | null;
    onSelect: (date: Date | null) => void;
    className?: string;
    onClose: () => void; // Добавляем коллбек для закрытия календаря
}

function Calendar({ selectedDate, onSelect, className, onClose }: CalendarProps) {
    const calendarRef = React.useRef<HTMLDivElement>(null);
    const [currentDate, setCurrentDate] = React.useState(
        selectedDate || new Date()
    );
    const [currentMonth, setCurrentMonth] = React.useState(
        selectedDate ? selectedDate.getMonth() : new Date().getMonth()
    );
    const [currentYear, setCurrentYear] = React.useState(
        selectedDate ? selectedDate.getFullYear() : new Date().getFullYear()
    );

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target as Node)
            ) {
                onClose(); // Закрываем календарь при клике вне
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    React.useEffect(() => {
        const savedDate = localStorage.getItem("lastSelectedDate");
        if (savedDate) {
            const date = new Date(savedDate);
            setCurrentDate(date);
            setCurrentYear(date.getFullYear());
            setCurrentMonth(date.getMonth());
        }
    }, []);

    React.useEffect(() => {
        if (selectedDate) {
            localStorage.setItem("lastSelectedDate", selectedDate.toISOString());
        }
    }, [selectedDate]);

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const handlePreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentYear(currentYear - 1);
            setCurrentMonth(11);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentYear(currentYear + 1);
            setCurrentMonth(0);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handleSelectDate = (day: number) => {
        const selected = new Date(currentYear, currentMonth, day);
        onSelect(selected);
        setCurrentDate(selected);
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentMonth(parseInt(event.target.value, 10));
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentYear(parseInt(event.target.value, 10));
    };

    const renderDays = () => {
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                currentDate &&
                currentDate.getDate() === day &&
                currentDate.getMonth() === currentMonth &&
                currentDate.getFullYear() === currentYear;

            days.push(
                <button
                    key={day}
                    className={cn(
                        "w-10 h-10 flex items-center justify-center rounded-full text-sm transition",
                        isSelected
                            ? "bg-orange text-white"
                            : "hover:bg-lightGray"
                    )}
                    onClick={() => handleSelectDate(day)}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    return (
        <div
            ref={calendarRef}
            className={cn(
                "p-4 shadow-md rounded-lg bg-white",
                "lg:h-[400px]",
                className
            )}
        >
            <div className="flex justify-between items-center mb-3">
                <button
                    className={cn(buttonVariants({ variant: "outline" }), "h-8 w-8 rounded-full")}
                    onClick={handlePreviousMonth}
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                    <select
                        value={currentMonth}
                        onChange={handleMonthChange}
                        className="border rounded-md px-2 py-1 text-sm"
                    >
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i}>
                                {new Date(0, i).toLocaleDateString("default", {
                                    month: "long",
                                })}
                            </option>
                        ))}
                    </select>
                    <select
                        value={currentYear}
                        onChange={handleYearChange}
                        className="border rounded-md px-2 py-1 text-sm"
                    >
                        {Array.from({ length: 10 }, (_, i) => {
                            const year = new Date().getFullYear() - 5 + i;
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button
                    className={cn(buttonVariants({ variant: "outline" }), "h-8 w-8 rounded-full")}
                    onClick={handleNextMonth}
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1 mt-3">{renderDays()}</div>
        </div>
    );
}

export { Calendar };
