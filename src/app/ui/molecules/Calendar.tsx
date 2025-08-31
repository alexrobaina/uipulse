'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const calendarVariants = cva(
  [
    'rounded-xl border bg-white dark:bg-neutral-900',
    'text-neutral-900 dark:text-neutral-100',
    'shadow-sm overflow-hidden',
  ],
  {
    variants: {
      variant: {
        default: 'border-neutral-200 dark:border-neutral-800',
        modern: [
          'border-neutral-200/40 dark:border-neutral-800/40',
          'shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)]',
          'dark:shadow-[0_2px_8px_0px_rgba(0,0,0,0.15)]',
        ],
        elevated: [
          'border-neutral-200/50 dark:border-neutral-800/50',
          'shadow-lg shadow-neutral-200/20 dark:shadow-neutral-900/40',
        ],
      },
      size: {
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const dayVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md text-sm font-medium',
    'transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-blue-500/20 focus-visible:ring-offset-2',
    'focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'hover:bg-neutral-100 dark:hover:bg-neutral-800',
          'text-neutral-900 dark:text-neutral-100',
        ],
        selected: [
          'bg-blue-600 text-white hover:bg-blue-700',
          'dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700',
        ],
        today: [
          'bg-blue-50 text-blue-600 border border-blue-200',
          'dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/40',
          'hover:bg-blue-100 dark:hover:bg-blue-900/30',
        ],
        outside: [
          'text-neutral-400 dark:text-neutral-500',
          'hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50',
        ],
        disabled: [
          'text-neutral-300 dark:text-neutral-600',
          'cursor-not-allowed',
        ],
        inRange: [
          'bg-blue-100 text-blue-900',
          'dark:bg-blue-900/20 dark:text-blue-100',
        ],
        rangeStart: [
          'bg-blue-600 text-white rounded-r-none',
          'dark:bg-blue-600 dark:text-white',
        ],
        rangeEnd: [
          'bg-blue-600 text-white rounded-l-none',
          'dark:bg-blue-600 dark:text-white',
        ],
      },
      size: {
        sm: 'h-8 w-8 text-xs',
        md: 'h-9 w-9 text-sm',
        lg: 'h-10 w-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

interface CalendarDate {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
}

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
  mode?: 'single' | 'multiple' | 'range';
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
  onValueChange?: (
    value: Date | Date[] | { start: Date; end: Date } | null
  ) => void;
  /**
   * Month change handler
   */
  onMonthChange?: (month: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  defaultValue,
  mode = 'single',
  numberOfMonths = 1,
  disabled,
  minDate,
  maxDate,
  weekStartsOn = 0,
  showWeekNumbers = false,
  variant = 'default',
  size = 'md',
  className,
  onValueChange,
  onMonthChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<
    Date | Date[] | { start: Date; end: Date } | null
  >(defaultValue || null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const actualValue = value !== undefined ? value : selectedValue;

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const adjustedDayNames = [
    ...dayNames.slice(weekStartsOn),
    ...dayNames.slice(0, weekStartsOn),
  ];

  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;

    if (typeof disabled === 'function') {
      return disabled(date);
    }

    if (Array.isArray(disabled)) {
      return disabled.some(
        disabledDate => date.getTime() === disabledDate.getTime()
      );
    }

    return false;
  };

  const isDateSelected = (date: Date): boolean => {
    if (!actualValue) return false;

    if (mode === 'single' && actualValue instanceof Date) {
      return date.toDateString() === actualValue.toDateString();
    }

    if (mode === 'multiple' && Array.isArray(actualValue)) {
      return actualValue.some(
        selectedDate => date.toDateString() === selectedDate.toDateString()
      );
    }

    if (
      mode === 'range' &&
      actualValue &&
      typeof actualValue === 'object' &&
      !Array.isArray(actualValue)
    ) {
      const { start, end } = actualValue as { start: Date; end: Date };
      if (start && end) {
        return date >= start && date <= end;
      }
      if (start) {
        return date.toDateString() === start.toDateString();
      }
    }

    return false;
  };

  const isDateInRange = (date: Date): boolean => {
    if (
      mode !== 'range' ||
      !actualValue ||
      typeof actualValue !== 'object' ||
      Array.isArray(actualValue)
    ) {
      return false;
    }

    const { start, end } = actualValue as { start: Date; end: Date };
    if (start && end) {
      return date > start && date < end;
    }
    return false;
  };

  const isRangeStart = (date: Date): boolean => {
    if (
      mode !== 'range' ||
      !actualValue ||
      typeof actualValue !== 'object' ||
      Array.isArray(actualValue)
    ) {
      return false;
    }

    const { start } = actualValue as { start: Date; end: Date };
    return start && date.toDateString() === start.toDateString();
  };

  const isRangeEnd = (date: Date): boolean => {
    if (
      mode !== 'range' ||
      !actualValue ||
      typeof actualValue !== 'object' ||
      Array.isArray(actualValue)
    ) {
      return false;
    }

    const { end } = actualValue as { start: Date; end: Date };
    return end && date.toDateString() === end.toDateString();
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;

    let newValue: Date | Date[] | { start: Date; end: Date } | null = null;

    if (mode === 'single') {
      newValue = date;
    } else if (mode === 'multiple') {
      const currentSelection = (actualValue as Date[]) || [];
      const isAlreadySelected = currentSelection.some(
        selectedDate => selectedDate.toDateString() === date.toDateString()
      );

      if (isAlreadySelected) {
        newValue = currentSelection.filter(
          selectedDate => selectedDate.toDateString() !== date.toDateString()
        );
      } else {
        newValue = [...currentSelection, date];
      }
    } else if (mode === 'range') {
      const currentRange = actualValue as { start: Date; end: Date } | null;

      if (!currentRange || (currentRange.start && currentRange.end)) {
        newValue = { start: date, end: null as any };
      } else if (currentRange.start && !currentRange.end) {
        if (date >= currentRange.start) {
          newValue = { start: currentRange.start, end: date };
        } else {
          newValue = { start: date, end: currentRange.start };
        }
      }
    }

    if (value === undefined) {
      setSelectedValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
    onMonthChange?.(newMonth);
  };

  const getCalendarDays = (month: Date): CalendarDate[] => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();

    const firstDayOfMonth = new Date(year, monthIndex, 1);
    const lastDayOfMonth = new Date(year, monthIndex + 1, 0);

    const firstDayWeekday = (firstDayOfMonth.getDay() - weekStartsOn + 7) % 7;
    const daysInMonth = lastDayOfMonth.getDate();

    const days: CalendarDate[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Previous month's trailing days
    const prevMonth = new Date(year, monthIndex - 1, 0);
    for (let i = firstDayWeekday - 1; i >= 0; i--) {
      const date = new Date(year, monthIndex - 1, prevMonth.getDate() - i);
      days.push({
        date,
        isCurrentMonth: false,
        isToday: date.getTime() === today.getTime(),
        isSelected: false,
        isDisabled: isDateDisabled(date),
      });
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, monthIndex, day);
      days.push({
        date,
        isCurrentMonth: true,
        isToday: date.getTime() === today.getTime(),
        isSelected: isDateSelected(date),
        isDisabled: isDateDisabled(date),
        isInRange: isDateInRange(date),
        isRangeStart: isRangeStart(date),
        isRangeEnd: isRangeEnd(date),
      });
    }

    // Next month's leading days
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, monthIndex + 1, day);
      days.push({
        date,
        isCurrentMonth: false,
        isToday: date.getTime() === today.getTime(),
        isSelected: false,
        isDisabled: isDateDisabled(date),
      });
    }

    return days;
  };

  const getDayVariant = (day: CalendarDate): string => {
    if (day.isDisabled) return 'disabled';
    if (day.isRangeStart) return 'rangeStart';
    if (day.isRangeEnd) return 'rangeEnd';
    if (day.isInRange) return 'inRange';
    if (day.isSelected) return 'selected';
    if (day.isToday) return 'today';
    if (!day.isCurrentMonth) return 'outside';
    return 'default';
  };

  const months = Array.from({ length: numberOfMonths }, (_, index) => {
    const monthDate = new Date(currentMonth);
    monthDate.setMonth(monthDate.getMonth() + index);
    return monthDate;
  });

  return (
    <div className={cn(calendarVariants({ variant, size }), className)}>
      {months.map((month, monthIndex) => {
        const days = getCalendarDays(month);

        return (
          <div
            key={monthIndex}
            className={cn(
              monthIndex > 0 &&
                'border-l border-neutral-200 dark:border-neutral-800 pl-4 ml-4'
            )}
          >
            {/* Header */}
            <div className='flex items-center justify-between mb-4'>
              {monthIndex === 0 && (
                <button
                  onClick={() => navigateMonth('prev')}
                  className='p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-150'
                  aria-label='Previous month'
                >
                  <ChevronLeft className='w-4 h-4' />
                </button>
              )}

              <h2 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                {monthNames[month.getMonth()]} {month.getFullYear()}
              </h2>

              {monthIndex === numberOfMonths - 1 && (
                <button
                  onClick={() => navigateMonth('next')}
                  className='p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-150'
                  aria-label='Next month'
                >
                  <ChevronRight className='w-4 h-4' />
                </button>
              )}

              {monthIndex > 0 && monthIndex < numberOfMonths - 1 && (
                <div className='w-10' />
              )}
            </div>

            {/* Days of week header */}
            <div className='grid grid-cols-7 gap-1 mb-2'>
              {showWeekNumbers && (
                <div className='h-9 text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-center font-medium'>
                  Wk
                </div>
              )}
              {adjustedDayNames.map(dayName => (
                <div
                  key={dayName}
                  className='h-9 text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-center font-medium'
                >
                  {dayName}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className='grid grid-cols-7 gap-1'>
              {days.map((day, dayIndex) => {
                const weekNumber = Math.floor(dayIndex / 7) + 1;
                const isFirstDayOfWeek = dayIndex % 7 === 0;

                return (
                  <React.Fragment key={`${day.date.getTime()}-${dayIndex}`}>
                    {showWeekNumbers && isFirstDayOfWeek && (
                      <div className='h-9 text-xs text-neutral-400 dark:text-neutral-500 flex items-center justify-center'>
                        {weekNumber}
                      </div>
                    )}
                    <button
                      onClick={() => handleDateClick(day.date)}
                      disabled={day.isDisabled}
                      className={cn(
                        dayVariants({
                          variant: getDayVariant(day) as any,
                          size,
                        })
                      )}
                      aria-label={`${day.date.toDateString()}`}
                      aria-selected={day.isSelected}
                      data-today={day.isToday}
                      data-selected={day.isSelected}
                    >
                      {day.date.getDate()}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
