export const calendarCode = `"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const calendarVariants = cva([
  "rounded-xl border bg-white dark:bg-neutral-900",
  "text-neutral-900 dark:text-neutral-100",
  "shadow-sm overflow-hidden",
], {
  variants: {
    variant: {
      default: "border-neutral-200 dark:border-neutral-800",
      modern: [
        "border-neutral-200/40 dark:border-neutral-800/40",
        "shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)]",
        "dark:shadow-[0_2px_8px_0px_rgba(0,0,0,0.15)]",
      ],
      elevated: [
        "border-neutral-200/50 dark:border-neutral-800/50",
        "shadow-lg shadow-neutral-200/20 dark:shadow-neutral-900/40",
      ],
    },
    size: {
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const dayVariants = cva([
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2",
  "focus-visible:ring-blue-500/20 focus-visible:ring-offset-2",
  "disabled:pointer-events-none disabled:opacity-50",
], {
  variants: {
    variant: {
      default: [
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "text-neutral-900 dark:text-neutral-100",
      ],
      selected: [
        "bg-blue-600 text-white hover:bg-blue-700",
        "dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700",
      ],
      today: [
        "bg-blue-50 text-blue-600 border border-blue-200",
        "dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/40",
      ],
      outside: [
        "text-neutral-400 dark:text-neutral-500",
        "hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50",
      ],
      disabled: [
        "text-neutral-300 dark:text-neutral-600",
        "cursor-not-allowed",
      ],
      inRange: [
        "bg-blue-100 text-blue-900",
        "dark:bg-blue-900/20 dark:text-blue-100",
      ],
      rangeStart: [
        "bg-blue-600 text-white rounded-r-none",
      ],
      rangeEnd: [
        "bg-blue-600 text-white rounded-l-none",
      ],
    },
    size: {
      sm: "h-8 w-8 text-xs",
      md: "h-9 w-9 text-sm",
      lg: "h-10 w-10 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface CalendarProps extends VariantProps<typeof calendarVariants> {
  /**
   * Currently selected date(s)
   */
  value?: Date | Date[] | { start: Date; end: Date } | null;
  /**
   * Default selected date(s)
   */
  defaultValue?: Date | Date[] | { start: Date; end: Date } | null;
  /**
   * Calendar selection mode
   */
  mode?: "single" | "multiple" | "range";
  /**
   * Whether to allow multiple month selection
   */
  numberOfMonths?: number;
  /**
   * Disabled dates
   */
  disabled?: Date[] | ((date: Date) => boolean);
  /**
   * Minimum selectable date
   */
  minDate?: Date;
  /**
   * Maximum selectable date
   */
  maxDate?: Date;
  /**
   * Week starts on (0 = Sunday, 1 = Monday)
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Show week numbers
   */
  showWeekNumbers?: boolean;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Change handler
   */
  onValueChange?: (value: Date | Date[] | { start: Date; end: Date } | null) => void;
  /**
   * Month change handler
   */
  onMonthChange?: (month: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  defaultValue,
  mode = "single",
  numberOfMonths = 1,
  disabled,
  minDate,
  maxDate,
  weekStartsOn = 0,
  showWeekNumbers = false,
  variant = "default",
  size = "md",
  className,
  onValueChange,
  onMonthChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<Date | Date[] | { start: Date; end: Date } | null>(
    defaultValue || null
  );
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const actualValue = value !== undefined ? value : selectedValue;

  // Calendar logic implementation here...
  
  return (
    <div className={cn(calendarVariants({ variant, size }), className)}>
      {/* Calendar implementation */}
    </div>
  );
};

export default Calendar;`;
