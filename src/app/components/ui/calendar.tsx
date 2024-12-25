"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

interface CalendarProps {
    selectedDate: Date | null;
    onSelect: (date: Date | null) => void;
    className?: string; // Позволяет передавать классы
}


function Calendar({ selectedDate, onSelect }: CalendarProps) {
    const [currentMonth, setCurrentMonth] = React.useState(new Date());

    const daysInMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        1
    ).getDay();

    const handlePreviousMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
        );
    };

    const handleNextMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
        );
    };

    const handleSelectDate = (day: number) => {
        const selected = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            day
        );
        onSelect(selected);
    };

    const renderDays = () => {
        const days = [];

        // Заполняем пустые ячейки перед началом месяца
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
        }

        // Заполняем дни месяца
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === currentMonth.getMonth() &&
                selectedDate.getFullYear() === currentMonth.getFullYear();

            days.push(
                <button
                    key={day}
                    className={cn(
                        "w-8 h-8 flex items-center justify-center rounded-md text-sm",
                        isSelected
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent hover:text-accent-foreground"
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
        <div className="p-3">
            <div className="flex justify-between items-center mb-2">
                <button
                    className={cn(buttonVariants({ variant: "outline" }), "h-7 w-7")}
                    onClick={handlePreviousMonth}
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium">
          {currentMonth.toLocaleDateString("default", {
              month: "long",
              year: "numeric",
          })}
        </span>
                <button
                    className={cn(buttonVariants({ variant: "outline" }), "h-7 w-7")}
                    onClick={handleNextMonth}
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1 mt-2">{renderDays()}</div>
        </div>
    );
}

export { Calendar };
