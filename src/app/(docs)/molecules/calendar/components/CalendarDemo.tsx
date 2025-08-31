'use client';

import Calendar from '@/app/ui/molecules/Calendar';
import Preview from '@/app/components/Preview';
import { useState } from 'react';

export default function CalendarDemo() {
  const [singleDate, setSingleDate] = useState<Date | null>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[]>([new Date()]);
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(
    {
      start: new Date(),
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    }
  );

  const disabledDates = [
    new Date(2024, 11, 25), // Christmas
    new Date(2024, 0, 1), // New Year
    new Date(2024, 6, 4), // Independence Day
  ];

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        {/* Basic Usage */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Basic Usage
          </h3>
          <div className='flex justify-center'>
            <Calendar
              value={singleDate}
              onValueChange={date => setSingleDate(date as Date)}
            />
          </div>
        </div>

        {/* Different Variants */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Variants
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='flex flex-col items-center space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Default
              </span>
              <Calendar variant='default' size='sm' />
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Modern
              </span>
              <Calendar variant='modern' size='sm' />
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Elevated
              </span>
              <Calendar variant='elevated' size='sm' />
            </div>
          </div>
        </div>

        {/* Multiple Selection */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Multiple Selection
          </h3>
          <div className='flex justify-center'>
            <Calendar
              mode='multiple'
              value={multipleDates}
              onValueChange={dates => setMultipleDates(dates as Date[])}
              variant='modern'
            />
          </div>
        </div>

        {/* Range Selection */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Range Selection
          </h3>
          <div className='flex justify-center'>
            <Calendar
              mode='range'
              value={dateRange}
              onValueChange={range =>
                setDateRange(range as { start: Date; end: Date })
              }
              variant='modern'
            />
          </div>
        </div>

        {/* Multiple Months */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Multiple Months
          </h3>
          <div className='flex justify-center'>
            <Calendar
              numberOfMonths={2}
              mode='range'
              variant='modern'
              size='sm'
            />
          </div>
        </div>

        {/* With Disabled Dates */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Disabled Dates
          </h3>
          <div className='flex justify-center'>
            <Calendar disabled={disabledDates} variant='modern' />
          </div>
        </div>

        {/* With Week Numbers */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            With Week Numbers
          </h3>
          <div className='flex justify-center'>
            <Calendar
              showWeekNumbers
              weekStartsOn={1} // Monday
              variant='modern'
            />
          </div>
        </div>

        {/* Min/Max Dates */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Date Range Restrictions
          </h3>
          <div className='flex justify-center'>
            <Calendar
              minDate={new Date()} // Today
              maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30 days from now
              variant='modern'
            />
          </div>
        </div>

        {/* Different Sizes */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Sizes
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='flex flex-col items-center space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Small
              </span>
              <Calendar size='sm' variant='modern' />
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Medium
              </span>
              <Calendar size='md' variant='modern' />
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Large
              </span>
              <Calendar size='lg' variant='modern' />
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
